import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IUsuarios from 'src/interfaces/IUsuarios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'




export default function B1() {

    const [rows, setRows] = useState([]);
    const [firstUser, setFirstUser] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/api/usuarios`, {
        });
        setRows(response.data.users);
        setFirstUser(response.data.users[0]);
      }; 
      fetchData();
    },[]);
    console.log(rows)

    return (
<div  className="Seccion contenedor-flex " > 
    <Box
        component="img"
        sx={{ height: 500, width: 300,}}
        alt="Proyecto ejemplo"
        src='https://s3-alpha-sig.figma.com/img/da52/0085/002b4627b6254ee1033ef261c84576f3?Expires=1686528000&Signature=LuRZzlD9u-GuE435rTTSYyCPs5xPF5I66MLePb2hn5wm4blARYJeX~oPszDg78puXR9MWr82NU1f8LkMOKsjWIKsfX-oASrRx6rARFXKexB1crGKnctdy0FgxBZQSid2Frh7ImXDe5Eb~2kHEzWNrIut6FN08f3JuArr7c6GO62vw63EkyH-gB8dwuKwtSUJamjRRk6reRQkuddRL335c9C8QZHjq6367opvhuSpluFL4PlM5SwTpTNlSVWwTce9BIVwd6mFaZ0GKT0RKKvCWL4EZwHgIC62eIhhNUjsG9conNzY9mNpLxnUXr2AUN9PFr4azYY-HrjEOBJDNkTdFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
    {firstUser && (
    <div className="contenedor-flexV ">
    <Box className='H2'>un poco sobre mi</Box>
    <div className='H3 width'> Descripción: {firstUser.descripcion} </div>
    <br />
    <Box className='H3'>Tecnologia y herramientas:</Box>
    <div className="contenedor-flex ">
    <Box >A</Box><Box >B</Box><Box >C</Box>
    </div>
    </div>)}
</div>
      );
}