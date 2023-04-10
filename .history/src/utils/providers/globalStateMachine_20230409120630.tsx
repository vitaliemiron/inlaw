import * as React from "react"
import { createMachine, assign, EventObject } from "xstate"
import { createActorContext } from "@xstate/react"

export type SizeUnit = "in" | "cm" | undefined

interface SetUnitEvent extends EventObject {
  type: "SET_UNIT"
  unit: SizeUnit
}

interface FetchSuccessEvent extends EventObject {
  type: "FETCH_SUCCESS"
  data: Record<string, any>
}

interface ModifyDataEvent extends EventObject {
  type: "MODIFY_DATA"
  data: Record<string, any>
}

interface ModifyAllDataEvent extends EventObject {
  type: "MODIFY_ALL_DATA"
  data: Record<string, any>
  isValid?: boolean
}

interface NavigateBackEvent extends EventObject {
  type: "NAVIGATE_BACK"
}

interface NavigateForwardEvent extends EventObject {
  type: "NAVIGATE_FORWARD"
}

interface Context {
  unit: SizeUnit
  parametersData: Record<string, any>
  parametersValidData: Record<string, any>[]
  parametersToHide: string[]
  currentIndex: number
}

const defaultContext: Context = {
  unit: undefined as SizeUnit,
  parametersData: {} as Record<string, number>,
  parametersValidData: [] as Record<string, number>[],
  parametersToHide: [] as string[],
  currentIndex: -1,
}

const globalStateMachine = createMachine<Context>({
  id: "steps",
  initial: "setUnit",
  context: defaultContext,
  predictableActionArguments: true,
  states: {
    setUnit: {
      on: {
        SET_UNIT: {
          target: "fetchDefaultData",
          actions: assign({
            unit: (_, event: SetUnitEvent) => {
              return event.unit
            },
          }),
        },
      },
    },

    modifyData: {
      on: {
        MODIFY_DATA: {
          actions: assign({
            parametersData: (ctx, event: ModifyDataEvent) => {
              return {
                ...ctx.parametersData,
                ...event.data,
              }
            },
          }),
        },
        MODIFY_ALL_DATA: {
          actions: assign({
            parametersData: (ctx, event: ModifyAllDataEvent) => {
              return event.data
            },
            parametersValidData: (ctx, { data, isValid = false }: ModifyAllDataEvent) => {
              if (isValid) {
                // Remove the forward history
                const newHistory = ctx.parametersValidData.slice(0, ctx.currentIndex + 1)
                // Add the new value
                return [...newHistory, data]
              } else {
                return ctx.parametersValidData
              }
            },
            currentIndex: (ctx, event: ModifyAllDataEvent) => {
              return event.isValid ? ctx.currentIndex + 1 : ctx.currentIndex
            },
          }),
        },

        NAVIGATE_BACK: {
          actions: assign({
            currentIndex: (ctx) => Math.max(ctx.currentIndex - 1, 0),
            parametersData: (ctx, event) => {
              const newIndex = Math.max(ctx.currentIndex - 1, 0)
              return ctx.parametersValidData[newIndex] || ctx.parametersData
            },
          }),
        },

        NAVIGATE_FORWARD: {
          actions: assign({
            currentIndex: (ctx) =>
              Math.min(ctx.currentIndex + 1, ctx.parametersValidData.length - 1),
            parametersData: (ctx, event) => {
              const newIndex = Math.min(ctx.currentIndex + 1, ctx.parametersValidData.length - 1)
              return ctx.parametersValidData[newIndex] || ctx.parametersData
            },
          }),
        },

        RESTART: {
          target: "setUnit",
          actions: assign(() => defaultContext),
        },
      },
    },
  },
})

export const GlobalContext = createActorContext(globalStateMachine)

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

const useGlobalState = () => {
  const currentState = GlobalContext.useSelector((state) => state.value)
  const sendAction = GlobalContext.useActorRef()

  const restart = () => {
    sendAction.send({ type: "RESTART" })
  }

  return { currentState, GlobalContext, restart }
}

export { useGlobalState }
