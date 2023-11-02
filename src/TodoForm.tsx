import React, { useState } from "react";


function ToDoForm({ addTask }: any) {

    const [userInput, setUserInput] = useState('');

    // Добавление значения поля ввода в userInput
    const handleChange = (e: any) => {
        setUserInput(e.currentTarget.value)
    };

    // Добавление нового элемента в массив
    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    };

    // Обработка события по нажатию enter
    const handleKeyPress = (e: any) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />        
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm;