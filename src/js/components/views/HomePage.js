import React from "react";
import { Grid, Container } from "@material-ui/core";
import AgentsFilterInput from "../visitors/AgentsFilterInput";

const HomePage = () => {
  return (
    <Container className="homepage">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "400px" }}
      >
        <Grid item xs={12} md={7} className="section">
          <AgentsFilterInput />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
