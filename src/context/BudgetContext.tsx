import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { BudgetActions, BudgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps={
    state: BudgetState
    dispatch:Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children:ReactNode
}
export const BudgetContext =createContext<BudgetContextProps>(null!)//el nulo se coloca para desaparecer el error, es una convencion de react
export const BudgetProvider=({children}:BudgetProviderProps)=>{
    const [state,dispatch]=useReducer(BudgetReducer,initialState)
    return(
        <BudgetContext.Provider
        value={{
            state,dispatch
        }}
        >
            {children}
        </BudgetContext.Provider>
    )    
}