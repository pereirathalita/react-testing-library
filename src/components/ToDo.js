import React from "react";
import useState from "react";


const ToDo = () => {
    const [task, updateTask]=useState('')
    const [tasks, updateTasks]=useState([])

    // criando uma função para o recebimento do campo form
    const handleInputChange = event => updateTask(event.target.value)
    const handleFormSubmit = event => {
        event.preventDefault()
        updateTasks([...tasks, task])
        updateTask('')
    }

    // criando um retorno com campos do form
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange}
            placeholder="Type a new task here"
            type="text"
            value={task}
            />
            <button type="submit">Add new task</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((t,index) =>(
                    <tr key={index}>
                    <td>{t}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}   

export default ToDo;