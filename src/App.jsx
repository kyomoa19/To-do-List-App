import React from 'react'

function App() {
  const card = [
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
  ];

  const finalArray = [];

  for (let i = 0; i < card.length; i++) {
    const currentCard = card[i];
    finalArray.push (
      <div className='bg-slate-700 rounded-2xl p-4 shadow-lg flex-col'>
              <div className='font-semibold text-white'>
                {currentCard.title}
                <div className='font-normal text-white'>
                  {currentCard.description} <br/>
                  Date: {currentCard.date} <br/>
                  Time: {currentCard.time} <br/>
                  Status: {currentCard.status} <br/>
                  <input type='checkbox'/>
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
            {finalArray}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
