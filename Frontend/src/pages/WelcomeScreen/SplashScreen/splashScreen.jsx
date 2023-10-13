import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { background, logo } from '../../../assets/Logo';

const SplashScreen = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Stack textAlign="center" spacing={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50vmin" }}>
        <Stack sx={{ width: "160px", height: "127px" }}>
          <img src={logo} alt="Logo" />
        </Stack>
       <Stack >
       <Typography variant="body1">
          Let us help you manage your financial.
        </Typography>
       </Stack>
      </Stack>
    </Box>
  );
}

export default SplashScreen;
