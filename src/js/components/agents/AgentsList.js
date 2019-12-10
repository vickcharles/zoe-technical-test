import React from "react";
import { useSelector } from "react-redux";
import AgentCard from "../agents/AgentCard";
import { Grid, Typography } from "@material-ui/core";

const AgentsList = () => {
  const agents = useSelector(state => state.agents);
  return (
    <div>
      <Typography variant="h2" className="primary-color JennaSue-Font">
        Match agents result: {agents.income}
      </Typography>
      <Grid container>
        <Grid xs={6}>
          {agents.matchAgents.map(agent => (
            <AgentCard {...agent} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default AgentsList;
