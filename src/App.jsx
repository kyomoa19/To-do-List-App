import React from 'react'

function App() {
  return (
    <div className='flex justify-center w-full min-h-screen bg-gray-800 text-white'>
      <header className='absolute top-0 text-xl p-5 bg-gray-500 w-full text-center rounded-lg'>
        To-Do List App
      </header>
      
      <main className='pt-36 w-3/4'>
        <div className='flex justify-center'>
          <input className='bg-slate-700 p-4 rounded-2xl w-3/4 shadow-md' placeholder='Type your text here...'>
          </input>
          <button className='pl-2 h-12 pt-2'>
            <img src='/logo192.png' alt="enter" className='w-full h-full'/>
          </button>
        </div>

        <div className='p-6'/>

        <div className='flex justify-center'>
          <div className='w-[85%] flex flex-col gap-y-4'>
            <p className='font-semibold text-xl'>Your To Do List</p> 
            <hr/>
            <div className='bg-slate-700 rounded-2xl p-4 shadow-lg flex-col'>
              <p className='font-semibold text-white'>
                Crossing the Road
                <p className='font-normal text-white'>
                  Why did the chicken cross the road? <br/>
                  Date: 30 Februari 2025<br/>
                  Time: 11.00 PM <br/>
                  Status: Active<br/>
                  <input type='checkbox'/>
                </p>
              </p>
            </div>
            <div className='bg-slate-700 rounded-2xl p-4 shadow-lg flex-col'>
              <p className='font-semibold text-white'>
                Cleaning the House
                <p className='font-normal text-white'>
                  Why did the chicken clean the road? <br/>
                  Date: 30 Februari 2025<br/>
                  Time: 11.00 PM <br/>
                  Status: Active<br/>
                  <input type='checkbox'/>
                </p>
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App
