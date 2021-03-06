import React, { useState } from "react";
import { useSelector } from "react-redux";
import AgentCard from "../agents/AgentCard";
import { Grid } from "@material-ui/core";

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
      <Grid container item spacing={2} md={8} className="m-auto">
        {agents.matchAgents.slice(0, agentsToShow).map((agent, i )=> (
          <Grid item xs={12} md={4} key={i}>
            <AgentCard {...agent} />
          </Grid>
        ))}
      </Grid>
      <div className="mt-medium mb-medium text-center" onClick={toggleShowMore}>
        <span className="grey-color cursor-pointer">
          show {agentsToShow === 3 ? "more" : "less"}
        </span>
      </div>
    </div>
  );
};

export default AgentsList;
