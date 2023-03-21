import { FormControl, FormGroup, InputLabel,Input,Button, Typography,styled } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { editUser, getUser } from '../service/api'
import {useNavigate,useParams} from 'react-router-dom'
const Container=styled(FormGroup)`
width:50%;
margin: 5% auto;
&>div{
  margin-top:20px
}
`
const EditUser = () => {
    const {id}=useParams()
  const navigate=useNavigate()
  const [data,setData]=useState({})
  function onValueChange(e){
    setData(prev=>{return {...prev,[e.target.name]:e.target.value}})
  }
 async function EditUserDetails(){
   await editUser(data,id)
   navigate('/')
  }

  useEffect(()=>{
    getDetail(id)
  },[id])

  async function getDetail(id){
    let response= await getUser(id)
    setData(response.data)
  }
  return (
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel shrink>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={data?.name}/>
      </FormControl>
      <FormControl>
        <InputLabel shrink>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email' value={data?.email}/>
      </FormControl>
      <FormControl>
        <InputLabel shrink>User Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='user_name'value={data?.user_name} />
      </FormControl>
      <FormControl>
        <InputLabel shrink>Phone Number</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone_number' value={data?.phone_number}/>
      </FormControl>
      <FormControl>
      <Button variant='contained' color='secondary'  onClick={EditUserDetails}>Edit</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser