import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Players from "./Players";
import {v4 as uuid } from 'uuid';
import { Link , useNavigate } from "react-router-dom";

export default function Add(){

    const [name,setName] = useState('')
    const [age,setAge] = useState('')

    let history = useNavigate()

    const  handleSubmit=(e)=>{
        e.preventDefault();

       const ids = uuid()
       let uniqueId = ids.slice(0,8)
       let a =name,
       b=age;

        Players.push({id:uniqueId , Name:a ,Age:b})

        history("/")

    }

    return (
<div>
    <Form className="d-grid gap-2" style={{margin :"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e)=> setName(e.target.value)}>
        </Form.Control>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e)=> setAge(e.target.value)}>
        </Form.Control>
       </Form.Group>
    <Button onClick={(e)=> handleSubmit(e)} type="Submit">Submit</Button>
    </Form>
</div>

    )
}