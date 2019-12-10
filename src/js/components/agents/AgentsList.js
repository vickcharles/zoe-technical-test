import React, { useState } from "react";
import { useSelector } from "react-redux";
import AgentCard from "../agents/AgentCard";
import { Grid, Typography } from "@material-ui/core";

const AgentsList = () => {
  const agents = useSelector(state => state.agents);
  const [agentsToShow, setAgentsToShow] = useState(3);

  const toggleShowMore = () => {
    if (agentsToShow === 3) {
      setAgentsToShow(agents.matchAgents.length);
    } else {
      setAgentsToShow(3);
    }
  };
  return (
    <div>
      <Typography variant="h2" className="primary-color JennaSue-Font">
        Match agents result: {agents.income}
      </Typography>
      <Grid container>
        <Grid xs={6}>
          {agents.matchAgents.slice(0, agentsToShow).map(agent => (
            <AgentCard {...agent} />
          ))}
        </Grid>
      </Grid>
      <div className="mt-medium mb-medium" onClick={toggleShowMore}>
        <span className="grey-color cursor-pointer">
          show {agentsToShow === 3 ? "more" : "less"}
        </span>
      </div>
    </div>
  );
};

export default AgentsList;
