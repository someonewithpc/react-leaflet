import {
  LeafletProvider,
  createContainerComponent,
  createControlHook,
  createElementHook,
  createElementObject,
  extendContext,
  useLeafletContext,
} from '@react-leaflet/core'
import { Control, type Layer } from 'leaflet'
import React, {
  type ForwardRefExoticComponent,
  type FunctionComponent,
  type ReactNode,
  type RefAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export interface LayersControlProps extends Control.LayersOptions {
  children?: ReactNode
}

type CustomLayersControlClassConstructor<T extends Control.Layers> = new (baseLayers?: Control.LayersObject, overlays?: Control.LayersObject, options?: Control.LayersOptions) => T

export const useLayersControlElement = <T extends Control.Layers>(
  klass: CustomLayersControlClassConstructor<T>
) => createElementHook<T, LayersControlProps>(
  function createLayersControl({ children: _c, ...options }, ctx) {
    const control = new klass(undefined, undefined, options)
    return createElementObject(
      control,
      extendContext(ctx, { layersControl: control }),
    )
  },
  function updateLayersControl(control, props, prevProps) {
    if (props.collapsed !== prevProps.collapsed) {
      if (props.collapsed === true) {
        control.collapse()
      } else {
        control.expand()
      }
    }
  },
)

export const useLayersControl = <T extends Control.Layers>(klass: CustomLayersControlClassConstructor<T>) => createControlHook(useLayersControlElement(klass))

export interface ControlledLayerProps {
  checked?: boolean
  children: ReactNode
  name: string
  extra?: Record<string, any>
}

export function CustomizableLayersControl<T extends Control.Layers>(
  klass: CustomLayersControlClassConstructor<T>
): ForwardRefExoticComponent<
  LayersControlProps & RefAttributes<T>
> & {
  BaseLayer: FunctionComponent<ControlledLayerProps>
  Overlay: FunctionComponent<ControlledLayerProps>
} {
  return Object.assign(createContainerComponent(useLayersControl(klass)), {
    BaseLayer: createControlledLayer<T>(function addBaseLayer(
      layersControl: T,
      layer: Layer,
      name: string,
      extra: Record<string, any> | undefined,
    ) {
      // @ts-ignore
      layersControl.addBaseLayer(layer, name, extra)
    }),

    Overlay: createControlledLayer<T>(function addOverlay(
      layersControl: T,
      layer: Layer,
      name: string,
      extra: Record<string, any> | undefined,
    ) {
      // @ts-ignore
      layersControl.addOverlay(layer, name, extra)
    }),
  })
}

export const LayersControl = CustomizableLayersControl(Control.Layers)

type AddLayerFunc<T extends Control.Layers> = (
  layersControl: T,
  layer: Layer,
  name: string,
  extra: Record<string, any>,
) => void

export function createControlledLayer<T extends Control.Layers>(addLayerToControl: AddLayerFunc<T>) {
  return function ControlledLayer(props: ControlledLayerProps) {
    const parentContext = useLeafletContext()
    const propsRef = useRef<ControlledLayerProps>(props)
    const [layer, setLayer] = useState<Layer | null>(null)

    const { layersControl, map } = parentContext
    const addLayer = useCallback(
      (layerToAdd: Layer) => {
        if (layersControl != null) {
          if (propsRef.current.checked) {
            map.addLayer(layerToAdd)
          }
          addLayerToControl(
            // @ts-ignore TS2345
            layersControl,
            layerToAdd,
            propsRef.current.name,
            propsRef.current.extra,
          )
          setLayer(layerToAdd)
        }
      },
      [layersControl, map],
    )
    const removeLayer = useCallback(
      (layerToRemove: Layer) => {
        layersControl?.removeLayer(layerToRemove)
        setLayer(null)
      },
      [layersControl],
    )
    const context = useMemo(() => {
      return extendContext(parentContext, {
        layerContainer: { addLayer, removeLayer },
      })
    }, [parentContext, addLayer, removeLayer])

    useEffect(() => {
      if (layer !== null && propsRef.current !== props) {
        if (
          props.checked === true &&
          (propsRef.current.checked == null ||
            propsRef.current.checked === false)
        ) {
          map.addLayer(layer)
        } else if (
          propsRef.current.checked === true &&
          (props.checked == null || props.checked === false)
        ) {
          map.removeLayer(layer)
        }
        propsRef.current = props
      }
    })

    return props.children ? (
      <LeafletProvider value={context}>{props.children}</LeafletProvider>
    ) : null
  }
}
