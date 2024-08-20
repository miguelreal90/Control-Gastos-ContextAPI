import { useMemo, useState } from "react"


export default function BudgetForm() {
    const [budget,setbudget]=useState(0)
    const hundleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setbudget(e.target.valueAsNumber)
    }
    const isValid = useMemo(()=>{
        return isNaN(budget)||budget<=0
    },[budget])
    return (
        <form className=" space-y-5">
            <div className=" flex flex-col space-y-5">
                <label htmlFor="budget" className=" text-4xl text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>
                <input 
                id='budget'
                type="number"
                className=" w-full bg-white border border-gray-200 p-2"
                placeholder="Define tu Presupuesto"
                name="budget"
                value={budget}
                onChange={hundleChange}
                
                
                />

            </div>
            <input 
            type="submit" 
            value="Definir Presupuesto" 
            className=" bg-blue-600 hover:bg-blue-700 w-full text-white font-black p-2 uppercase cursor-pointer disabled:opacity-40"
            disabled={isValid}
            />

        </form>
    )
}
