import React, { useContext, useState, useEffect } from 'react'
import { MainContext } from '../Context/Context'

const Form = () => {
    const[form,setForm] = useState({})
    const{singleData:Data}=useContext(MainContext)
    const[submit,setSubmit]= useState(false)
    const[error,setError]=useState({})

    // console.log(Data);
    // console.log(form);

    // var usersdata = JSON.parse( localStorage.getItem('formdetail' ) )
    // console.log(usersdata);
    
    const handleSubmit=(e)=>{
     e.preventDefault()
     localStorage.setItem("formdetail", JSON.stringify(form))
     setError(validate(form))
     setSubmit(true)
    }

    useEffect(()=>{
        console.log(error);
    if(Object.keys(error).length === 0 && submit){
        console.log(form);
    }
    },[error])

    const handleonchange=(e)=>{ 
        let{name,value} = e.target;
           return    setForm({
                   ...form, 
                  [name]:value,
                            })
                                                                          
    }
    

const validate=(values)=>{
const error = {}
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.Name){
    error.Name = "Name is required!"
  }
  if(!values.Age){
    error.Age = "Age is required!"
  }
  if(!values.Email){
    error.Email = "Email is required!"
  } 
  if(!values.gender){
    error.gender = "gender is required!"
  }
  return error
    } 

  return (
    <div> <h3>Please Fill the Details</h3>

    {Object.keys(error).length === 0 && submit ?
    (<h1 className='Ticketbooked'>Congrats Ticket booked !!! Successfully</h1>) 
     : (<div></div>)

}
        <form onSubmit={handleSubmit} >
         <div className='form'>
         <label className='movielabel'>Movie Name :</label>
            <input type="text" 
            disabled={true}
            value={Data?.show?.name} 
            onChange={handleonchange}
            />
         </div>
         


            <div className='form'>    
         <label className='label'>Name :</label>
            <input className='input'
             type="text"  
           placeholder='Enter Name'
            value={form.name} 
            name='Name'
            onChange={handleonchange}
            />
         </div>
         <p>{error.Name}</p>


         <div className='form'>
        <label className='label'>Age:</label>
        <input 
        className='ageinput'
        type="number"
        placeholder='Enter age'
        name='Age'
         value={form.age}
         onChange={handleonchange}
         />
        </div>
        <p>{error.Age}</p>


        <div className='form'>
        <label className='label'>Email:</label>
        <input className='input'
         type="email"
         placeholder="Enter email.."
         name="Email"
         value={form.email}
         onChange={handleonchange}
         />
        </div>
        <p>{error.Email}</p>         


        <div>
        
        <div className='form'>
        <input className='input'
         type="radio"
        
         name="gender"
         value="Male"
         onChange={handleonchange}
         />
           <label className='label'>Male</label>
           </div>
            
        
       
         
        <div className='form'>
        <input type="radio"
        className='input'
        
         name="gender"
         value="FeMale"
         onChange={handleonchange}
         />
          <label className='femalelabel'>Female</label>
        </div>
        <p>{error.gender}</p> 

            </div> 
        
        {<button className='submit' >Submit</button>}
    
        
        </form>
    </div>
  )
}

export default Form