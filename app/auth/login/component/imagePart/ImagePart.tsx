import { Box, Typography } from "@mui/material";

export default function ImagePart() {

return(
       <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
          color: "white",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 4,
          textAlign: "center",
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-796.jpg"
          alt="Dashboard Preview"
          style={{
            width: "70%",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          }}
        />
        <Typography variant="h5" fontWeight="bold" mt={3}>
          The easiest way to manage your portfolio.
        </Typography>
        <Typography>
          Join our platform and manage everything in one place.
        </Typography>
      </Box>
)


}