import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

export default function ExpenceList() {
    const {state}=useBudget()
    const isEmpty = useMemo(()=>state.expences.length===0,[state.expences])
    return (
        <div className=" mt-10">
            {isEmpty?<p className=" text-gray-600 text-2xl font-bold">No Hay Gastos</p>:(
                <>
                    <p className=" text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
                    
                    
                </>
            )}

        </div>
    )
}