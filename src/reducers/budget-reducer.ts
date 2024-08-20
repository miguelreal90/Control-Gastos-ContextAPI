// Definimos los tipos de las acciones
type BudgetAction = 
  | { type: 'ADD_EXPENSE'; payload: { amount: number; description: string } }
  | { type: 'REMOVE_EXPENSE'; payload: { id: number } }
  | { type: 'UPDATE_BUDGET'; payload: { newBudget: number } };

// Definimos la estructura del estado
type BudgetState = {
    budget: number;
    expenses: { id: number; amount: number; description: string }[];
}

// Estado inicial
const initialState: BudgetState = {
  budget: 0,
  expenses: []
};

// Reducer
function budgetReducer(state: BudgetState = initialState, action: BudgetAction): BudgetState {

}