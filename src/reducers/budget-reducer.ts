// Definimos los tipos de las acciones
export type BudgetActions = 
    {type:'add budget',payload:{budget:number}}|
    {type:'Show Modal'}|
    {type:'close modal'}



// Definimos la estructura del estado
export type BudgetState = {
    budget: number
    show:boolean
}

// Estado inicial
export const initialState: BudgetState = {
    budget: 0,
    show:false
}

// Reducer
export const BudgetReducer = (
    state:BudgetState=initialState,
    actions:BudgetActions
)=>{
    if (actions.type==='add budget') {
        return{...state,budget:actions.payload.budget}
    }
    if (actions.type==='Show Modal') {
        return{...state,show:true}
    }
    if (actions.type==='close modal') {
        return{...state,show:false}
    }
    return state
}