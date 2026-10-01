import React,{useState} from 'react'


const App = () => {
const [title, settitle] = useState("")
const [description, setdescription] = useState("")
const [task, settask] = useState([])


  const formhandling=(e)=>{
    e.preventDefault()
    console.log("submit")
    const newtask=[...task]
    newtask.push({title,description})
    console.log(newtask)

    settask(newtask)

    settitle("")
    setdescription("")
  }
  return (
    <div className=' h-screen bg-black lg:flex'>
      <form action="" onSubmit={(e)=>{
        formhandling(e)
      }}  className=' p-4 flex  items-start  lg:w-1/2  gap-5 flex-col '>
        
        
                <input 
        type="text"
        placeholder='Enter Topic here'
        className=' border-4 w-full px-5 py-2 font-medium outline-none rounded text-amber-50'
          value={title}
          onChange={(e)=>settitle(e.target.value) }
          />
        <textarea name="" 
        placeholder='write notes '
        className=' border-4 w-full h-32 px-2 font-medium outline-none py-2 items-start rounded text-amber-50'
        value={description}
        onChange={(e)=>{setdescription(e.target.value); console.log(e.target.value)}}
        >

        </textarea>
        <button className='border-2 rounded px-5 py-2 w-full bg-amber-50 ' > Add NOtes</button>
        
        
      </form>
      <div className='bg-gray-900 lg:w-1/2 p-9 gap-2 ' >
        <h1 className='text-white text-5xl  font-bold'>YOUR NOTES</h1>
        
        <div className=' gap-6 flex flex-wrap  overflow-auto'>
          {task.map(function pr(elem,idx) {
            return  <div key={idx} className='bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] bg-cover h-40 w-35  text-black p-4 rounded-3xl overflow-auto '>
              <h2 className='font-bold uppercase' > {elem.title}</h2>
              <p className='' >{elem.description}</p>
            </div> 
            
          })}
          
        
       
        </div>
      </div>

    </div>
  )
}

export default App