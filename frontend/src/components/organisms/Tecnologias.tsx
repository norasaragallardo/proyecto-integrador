import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { blue, blueGrey, orange, yellow } from "@mui/material/colors";
import { HtmlSharp } from "@mui/icons-material";
import { Stack } from "@mui/material";
export default function Tecnologias() {

return(
<>

<section className="technology">
        <h3 className="title-technology">Tecnologias y Herramientas</h3>
        <div className="icons-rechnology">
          <Stack direction="row" spacing={2}>
            <HtmlSharp
              sx={{
                fontSize: "50px",
                color: orange[500],
                background: orange[100],
              }}
            />
            <CssIcon
              sx={{ fontSize: "50px", color: blue[500], background: blue[50] }}
            />
            <JavascriptIcon
              sx={{
                fontSize: "50px",
                background: yellow[500],
              }}
            />
            <PhpIcon
              sx={{
                fontSize: "50px",
                color: blueGrey[900],
                background: blue[500],
              }}
            />
          </Stack>
        </div>
      </section>
</>
)
}