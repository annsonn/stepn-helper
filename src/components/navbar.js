import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            STEPN HELPER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
