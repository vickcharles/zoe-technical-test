import React, { useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import AgentsFilterInput from "../visitors/AgentsFilterInput";
import { useDispatch } from "react-redux";
import { agentsActions } from "../../actions/agents.actions";

const HomePage = () => {
  const { fetchAgents } = agentsActions;
  const dispatch = useDispatch();

  useEffect(() => {
    import("../../../data/AGENTS_LIST.json").then(res =>
      dispatch(fetchAgents(res.data))
    );
  }, [dispatch, fetchAgents]);

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
