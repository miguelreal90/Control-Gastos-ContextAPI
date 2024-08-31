import { categories } from "../data/categorie";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import type { DraftExpence, Value } from "../types";
import ErrorMessege from "./ErrorMessege";
import { useBudget } from "../hooks/useBudget";

export default function ExpenceForm() {
    const [expence,setExpence]=useState<DraftExpence>({
        expenseName: '',
        amount:0,
        category: '',
        date:new Date()
    })
    const [error,setError]=useState('')
    const {dispatch}=useBudget()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        const {name,value}=e.target
        const isAmountField=['amount'].includes(name)
        setExpence({
            ...expence,[name]:isAmountField?+value:value
        })
    }
    const handleChangeDate = (value:Value) => setExpence({
        ...expence,date:value
    }) 

    const handleSumit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (Object.values(expence).includes('')) {
            setError('Todos los Campos Son Obligatorios')
            return
        }
        dispatch({type:'add-expense',payload:{expence}})
        setExpence({
            expenseName: '',
            amount:0,
            category: '',
            date:new Date()
        })
        
    }
    return (
        <form className=" space-y-5" onSubmit={handleSumit}>
            <legend
            className=" uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
            >
                nuevo gasto
            </legend>
            {error&&<ErrorMessege>{error}</ErrorMessege>}
            <div className=" flex flex-col gap-2">
                <label 
                htmlFor="expenseName"
                className=" text-xl"
                >Nombre de Gasto</label>
                <input 
                type="text" 
                name="expenseName" 
                id="expenseName"
                placeholder="Añade el Nombre del gasto"
                className=" bg-slate-100 p-2"
                value={expence.expenseName}
                onChange={handleChange}
                />

            </div>
            <div className=" flex flex-col gap-2">
                <label 
                htmlFor="amount"
                className=" text-xl"
                >Cantidad</label>
                <input 
                type="number" 
                name="amount" 
                id="amount"
                placeholder="Añade la Cantidad del gasto. Ej 300"
                className=" bg-slate-100 p-2"
                value={expence.amount}
                onChange={handleChange}
                />

            </div>
            <div className=" flex flex-col gap-2">
                <label 
                htmlFor="category"
                className=" text-xl"
                >Categoria</label>
                <select  
                name="category" 
                id="category"
                className=" bg-slate-100 p-2"
                value={expence.category}
                onChange={handleChange}
                >
                    <option value="">--Seleccione--</option>
                    {categories.map(category=>(
                        <option 
                        key={category.id}
                        value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

            </div>
            <div className=" flex flex-col gap-2">
                <label 
                htmlFor="amount"
                className=" text-xl"
                >Fecha Gasto: </label>
                <DatePicker className=" bg-slate-100 p-2 border-0"
                value={expence.date}
                onChange={handleChangeDate}
                />

            </div>
            <input type="submit"
            value={"Registar gasto"}
            className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
            />

        </form>
    )
    }
