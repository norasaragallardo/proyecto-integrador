import { Box, Button, Container, Stack } from "@mui/material";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { blue, blueGrey, orange, yellow } from "@mui/material/colors";
import { HtmlSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import './organisms.css'


export default function AboutMe() {
 const navigate = useNavigate();
const handleRedirectToAbout=()=>{
       navigate('./barra.tsx')
 }
  return (
    <div>
      <Container className="container">
        <Stack direction="row" spacing={2}>
          <div className="image-container">
            <div> <img src='/src/assets/BG.png' className="bg-foto" /></div>
            <div><img src='/src/assets/perfil.png' alt="perfil" className="foto"  /></div>
            
           
          </div>

          <div className="about1">
            <div className="text">
              <div className="title">Un poco sobre mi</div>
              <div className="about">
              Poland. I love helping
                companies of all sizes impact the world positively 
                freelance UI/UX Designer based in Lublin, Poland. I love helping
                companies of all sizes impact the world positively and bring
                their vision to life through great UI/UX. Conoce más sobre mi.
                <button className="button" onClick={()=>handleRedirectToAbout()}>Conoce mas sobre mi</button>
                </div>
               
              

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

