import { FormControl, FormGroup, InputLabel,Input,Button, Typography,styled } from '@mui/material'
import React,{useState} from 'react'
import { addUser } from '../service/api'
import {useNavigate} from 'react-router-dom'
const Container=styled(FormGroup)`
width:50%;
margin: 5% auto;
&>div{
  margin-top:20px
}
`
const AddUser = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({})
  function onValueChange(e){
    setData(prev=>{return {...prev,[e.target.name]:e.target.value}})
  }
 async function AddUserDetails(){
   await addUser(data)
   navigate('/')
  }
  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel >Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='user_name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone_number'/>
      </FormControl>
      <FormControl>
      <Button variant='contained' onClick={AddUserDetails}>Add</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser