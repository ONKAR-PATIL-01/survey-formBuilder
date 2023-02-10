import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export const Dashboard = () => {
    const [email,setemail]=useState("");
   
    const [input1, setinput1] = useState({
    
     email: "",
   });
   const handlechange=(e)=>{
      setinput1((prevState)=>({
       ...prevState,
       [e.target.name]:e.target.value
 
      }))
   }
  
   const  handleSubmit =async(e)=>{
     e.preventDefault();
     setemail(input1.email);

     
     try{
       const config={
         headers:{
           "Content-type":"application/json"
         }
       }
       
const {data}=await axios.get(
 `http://localhost:2000/api/form/form/${email}`,config

);
     console.log(data);
     
    
   }catch(error){
     
   }

 }  
    const navigate=useNavigate();
  return (
    <>
     <form onSubmit={handleSubmit}>
     <TextField
          onChange={handlechange}
          name="email"
          value={input1.email}
       
          type={"email"}
          variant="outlined"
          placeholder="Email"
          
        ></TextField>
 
         <Button 
          type="submit"
            style={{
              borderRadius: 35,
              backgroundColor: "#FFFF00",
              color:'#000',
              marginTop:'8px',
              marginLeft:'20px'
            }}
            variant="contained"
          >
            Get Froms
           
          </Button>
          <Button onClick={()=>{
       navigate('/dnd')
     }}
         
            style={{
              borderRadius: 35,
              backgroundColor: "#FFFF00",
              marginTop:'8px',
              marginLeft:'700px',
              color:'#000'
            
            }}
            variant="contained"
          >
           create your own form
           
          </Button>
   
         </form>
  
    </>
  )
}
// import React from 'react'

// export const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }
