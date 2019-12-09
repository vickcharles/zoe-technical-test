import React from "react";

import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import "../../../assets/sass/header.sass";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar className="tool-bar">
          <Typography variant="h6" className="title">
            Zoe Test
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
