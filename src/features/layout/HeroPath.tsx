import { Box } from "@mui/material";
import HeroHeaderPath from "../home/components/HeroPath";

export default function HeroPath(){
    return(
          <Box
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          
          transform: {
            xs: "translateX(-50%) scale(0.35)",
            md: "translateX(-50%) scale(0.55)",
          },
          transformOrigin: "top center",
          zIndex: 11,
          pointerEvents: "none",
          width: 700,
          height: 200,
        }}
      >
        <HeroHeaderPath />
      </Box>
    )
}