import Players from "./Players";
import React from 'react'
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link , useNavigate } from "react-router-dom";

function Home(){

let history = useNavigate()

const handleEdit = (id , name , age)=>{

    localStorage.setItem('Name',name);
    localStorage.setItem('Age',age);
    localStorage.setItem('Id',id);
}
    const handleDelete =(id)=>{
        var index = Players.map(function(e){
            return e.id
        }).indexOf(id)


        Players.splice(index,1)

        history('/')
    }
   return(
    <div className="container-fluid">
     <fragment>
        <div style={{margin:'10rem'}}>
            <Table striped bordered hover size="sm">
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                    
                </tr>
             </thead>
             <tbody>
                {
                    Players && Players.length > 0 ? 
                    Players.map((e) =>{
                        return(
                            <tr>
                                <td>{e.Name}</td>
                                <td>{e.Age}</td>
                               

                                <td>
                                    <Link to='/edit'>
                                    <Button onClick={()=> handleEdit(e.id,e.Name,e.Age)}>EDIT</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={()=> handleDelete(e.id)} >DELETE</Button>
                                </td>
                            </tr>
                            
                        )
                    })
                    : 'No Records!'
                }
             </tbody>
            </Table>
            <br>
            </br>
            <Link className="d-grid gap-2" to='/create'>
           <Button size ="lg">CREATE</Button>

            </Link>
        </div>
     </fragment>
    </div>
   )
}

export default Home;