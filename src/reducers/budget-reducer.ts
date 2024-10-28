import { DraftExpence, Expence } from "../types"
import {v4 as uuidv4} from 'uuid'

// Definimos los tipos de las acciones
export type BudgetActions = 
    {type:'add budget',payload:{budget:number}}|
    {type:'Show Modal'}|
    {type:'close modal'}|
    {type:'add-expense',payload:{expence:DraftExpence}}|
    {type:'remove-expence',payload:{id:Expence["id"]}}


// Definimos la estructura del estado
export type BudgetState = {
    budget: number
    show:boolean
    expences:Expence[]
}

// Estado inicial
export const initialState: BudgetState = {
    budget: 0,
    show:false,
    expences:[]
}
const createExpense = (draftExpence:DraftExpence):Expence=>{
    return {
        ...draftExpence,
        id:uuidv4()
    }

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

    if (actions.type==='add-expense') {
        const expence=createExpense(actions.payload.expence)
        return{...state,
            expences:[...state.expences,expence],show:false}
    }
    if (actions.type==='remove-expence'){
        return{...state,
            expences:state.expences.filter(expense=>expense.id !== actions.payload.id)

        }
    }
    return state
}