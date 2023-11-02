import React from "react";

export interface iTodo {
    id: string,
    task: string,
    complete: boolean
}

interface Props {
    todo: iTodo,
    toggleTask: (id: string) => void,
    removeTask: (id: string) => void
}

function ToDo({ todo, toggleTask, removeTask }: Props) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo;