// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import './organisms.css'


// export default function B1() {
//     return (
// <div  className="Seccion contenedor-flex " >
//         <Box
//         component="img"
//         sx={{ height: 300, width: 600,}}
//         alt="Proyecto ejemplo"
//         src='https://s3-alpha-sig.figma.com/img/2c07/8fd1/7f729c26eda492a8a9249a61228c2f0a?Expires=1686528000&Signature=bKRCS1S0KQVF4llgXh0dKumBtwQbd68-tbLkkvk50eS9VsR4BEeK5xkmtO99IX475E8j3-Y9i-4pl4davBnQlx96AXAyzZ7fheDXOceUDLI08Tl5~hVHVFPHEJ2B7WJlgMETNKoMy~wuoPiieRyH-UzxSZMB-HoIfjE5BzJOZS0BeM4bB5e~Uin7pFZiWoqELaoLMhQczqbif7TOiAC78zjnFNUM-ngSbGpzBvdjVoYSCbeqsH9q-Ap7K25QuyZMlvABUNRp7W-kSVFBfX6~kshR0mFsEk5Zq~STN1X66iRlleJDNkwpwbyhofD5jvMbaCd~Wns5QFYJ96-RWDeOEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
//         />  
//     <div className="contenedor-flexV ">
//     <Box className="H2">un poco sobre mi</Box>
//     <Box className="H3">Tecnologia y herramientas:</Box>
//     </div>
// </div>
//       );
// }

import './organisms.css'
import foto from "../../assets/Image.png";
import bg from "../../assets/BG.png";
import { Button, Container, Stack } from "@mui/material";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { blue, blueGrey, orange, yellow } from "@mui/material/colors";
import { HtmlSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


export default function B1() {
 const navigate = useNavigate();
const handleRedirectToAbout=()=>{
       navigate('./barra.tsx')
 }
  return (
    <div>
      <Container className="container">
        <Stack direction="row" spacing={2}>
          <div className="image-container">
            <img src={bg} className="bg-foto" />
           
          </div>

          <div className="about1">
            <div className="text">
              <h3 className="title">Un poco sobre mi</h3>
              <p className="about">
              Poland. I love helping
                companies of all sizes impact the world positively 
                freelance UI/UX Designer based in Lublin, Poland. I love helping
                companies of all sizes impact the world positively and bring
                their vision to life through great UI/UX. Conoce más sobre mi.
                <button className="button" onClick={()=>handleRedirectToAbout()}>Conoce mas sobre mi</button>
                </p>
               
              

              <link rel="stylesheet" href="" />
              <h3 className="title-tech">Tecnologias y Herramientas</h3>
              <Stack direction="row" spacing={2}>
                <HtmlSharp
                  sx={{
                    fontSize: "50px",
                    color: blue,
                    background: orange,
                  }}
                />
                <CssIcon
                  sx={{
                    fontSize: "50px",
                    color: blue,
                    background: orange,
                  }}
                />
                <JavascriptIcon
                  sx={{
                    fontSize: "50px",
                    color: blue,
                    background: orange,
                  }}
                />
                <PhpIcon
                  sx={{
                    fontSize: "50px",
                    color: blue,
                    background: orange,
                  }}
                />
              </Stack>
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
