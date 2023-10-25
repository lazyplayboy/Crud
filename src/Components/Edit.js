import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Players from "./Players";

import {  useNavigate } from "react-router-dom";


export default function Edit(){
 
    const [name,setName] = useState(localStorage.getItem('Name'))
    const [age,setAge] = useState(localStorage.getItem('Age'))
    const [id,setId] = useState(localStorage.getItem('Id'))

    let history = useNavigate();

    var index = Players.map(function(e){
        return e.id
    }).indexOf(id);

    const  handleSubmit=(e)=>{
        e.preventDefault();
      
        let a = Players[index]
        Players[index].Name = name
        Players[index].Age = age
        history("/")

    }

    // useEffect(()=>{
    //   setName(localStorage.getItem('Name'))
    //   setAge(localStorage.getItem('Age'))
    //   setId(localStorage.getItem('Id'))
    // },[])

    return (
        <div>
             <Form className="d-grid gap-2" style={{margin :"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" value={name} required onChange={(e)=> setName(e.target.value)}>
        </Form.Control>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" value={age} required onChange={(e)=> setAge(e.target.value)}>
        </Form.Control>
       </Form.Group>
    <Button onClick={(e)=> handleSubmit(e)} type="Submit">Update</Button>
    </Form>
        </div>
    )


}