import React, { useState} from 'react'
import {useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Message from '../Message/index'
import FormContainer from '../FormContainer/index'
import axios from 'axios'
import style from './style.module.css'

const Register = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)
    const [loading, setloading] = useState(false)

    if(message||error){
        setTimeout(() => {
            seterror(null)
            setmessage(null)
        }, 3000);
    }

    const history=useHistory()

    const submitHandler=async(e)=>{
        e.preventDefault()
        let obj={
            name,
            email,number,
            dateOfBirth
        }

        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        }
        try{
            setloading(false)
            const {data}=await axios.post('https://temp-strike.herokuapp.com/api/users',obj,config)
            if(!data){
                setloading(true)
            }else{
                setloading(false)
            }
            if(data.success){
                history.push('/forms')
            }else{
                seterror(data.error)
            }
        }catch(e){
            console.log(e)
            seterror('Server Error')
        }
    }

    return (
        <>
            <FormContainer>
            <Form onSubmit={submitHandler} className={style.wrapper}>    
                {message && <Message variant='success'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <div>Loading</div>}
                <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='number'>
                <Form.Label>Number</Form.Label>
                <Form.Control
                    pattern="[0-9]*"
                    value={number}
                    maxLength="10"
                    placeholder='Enter Mobile Number'
                    onChange={(e) => setnumber(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='date'>
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                    type='date'
                    placeholder='Confirm password'
                    value={dateOfBirth}
                    onChange={(e) => setdateOfBirth(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' disabled={loading}>
                    {loading?'Loading...':'Register'}
                </Button>
            </Form>
            </FormContainer>   
        </>
    )
}

export default Register
