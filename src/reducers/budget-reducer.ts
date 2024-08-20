// Definimos los tipos de las acciones
export type BudgetActions = 
    {type:'add budget',payload:{budget:number}}



// Definimos la estructura del estado
export type BudgetState = {
    budget: number
}

// Estado inicial
export const initialState: BudgetState = {
    budget: 0
}

// Reducer
export const BudgetReducer = (
    state:BudgetState=initialState,
    actions:BudgetActions
)=>{
    if (actions.type==='add budget') {
        return{...state,budget:actions.payload.budget}
    }
    return state
}