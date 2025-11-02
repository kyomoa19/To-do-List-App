import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Calculus Class',
      description: 'Attending Calculus Class at K.205',
      date: '30 February 2025',
      time: '10.00-11.40',
      status: 'Active',
    },
    {
      title: 'Physics Class',
      description: 'Attending Physics Class at K.105',
      date: '31 February 2025',
      time: '13.00-15.30',
      status: 'Active',
    }, 
    {
      title: 'Organization Meeting',
      description: 'Attending Meeting at Perpusat',
      date: '1 March 2025',
      time: '13.00-15.30',
      status: 'Active',
    }, 
    {
      title: 'Meeting with Lecturer',
      description: 'Attending the Meeting in S.101',
      date: '2 March 2025',
      time: '14.00-17.30',
      status: 'Active',
    }, 
  ])

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => setNewTask(e.target.value);

  function handleAddTask() {
    const now = new Date();
    const TaskToAdd = {
      title: newTask,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      status: 'Active',
      completed: false,
    }
    setTasks([...tasks, TaskToAdd])
    setNewTask("");
  }

  function handleToggleCompleted(index){
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks); 
  }

  function handleRemoveTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const finalArray = [];

  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];
    finalArray.push (
      <div className='bg-slate-700 rounded-2xl p-4 shadow-lg flex-col'>
              <div className='font-semibold text-white'>
                {currentTask.title}
                <div className='font-normal text-white'>
                  {currentTask.description} <br/>
                  Date: {currentTask.date} <br/>
                  Time: {currentTask.time} <br/>
                  Status: {currentTask.status} <br/>
                  <input type='checkbox'
                  checked={currentTask.completed}
                  onChange={() => handleToggleCompleted(i)}/>

                  <button 
                  className='ml-4 bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700'
                  onClick={() => handleRemoveTask(i)}>
                    
                  </button>
                </div>
              </div>
            </div>
    )

  }
  return (
    <div className='flex justify-center w-full min-h-screen bg-gray-800 text-white'>
      <header className='absolute top-0 text-xl p-5 bg-gray-500 w-full text-center rounded-lg'>
        To-Do List App
      </header>
      
      <main className='pt-36 w-3/4'>
        <div className='flex justify-center'>
          <input 
          className='bg-slate-700 p-4 rounded-2xl w-3/4 shadow-md' 
          placeholder='Type your text here...'
          value={newTask}
          onChange={handleInputChange}>
          </input>
          <button className='pl-2 h-12 pt-2'>
            <img 
            src="./logo192.png" 
            alt="enter" 
            className='w-full h-full'
            onClick={handleAddTask}
            />
          </button>
        </div>

        <div className='p-6'/>

        <div className='flex justify-center'>
          <div className='w-[85%] flex flex-col gap-y-4'>
            <p className='font-semibold text-xl'>Your To Do List</p> 
            <hr/>
            {finalArray}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
