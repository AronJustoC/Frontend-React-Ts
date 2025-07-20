import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 0, md: 6 }}>
        <Box
          sx={{
            backgroundImage: `url(/fondo.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: "auto", md: "100vh" },
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "auto", md: "100vh" },
            gap: 2,
          }}
        >
          {" "}
          <Outlet />
        </Box>{" "}
      </Grid>
    </Grid>
  );
}
