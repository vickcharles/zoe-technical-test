import React from "react";

import { Container, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import AgentsSorter from "../agents/AgentsSorter";
import AgentsList from "../agents/AgentsList";

const Agents = () => {
  const agents = useSelector(state => state.agents);

  const emptyList = (
    <div className="text-center">
      <Typography variant="h2" className="primary-color JennaSue-Font">
        there is not match : (
      </Typography>
      <Typography variant="subtitle1" className="grey-color">
        No available Agents based on your income. Please try different income
        value.
      </Typography>
      <Link to="/">
        <Button variant="contained" color="secondary" className="mt-medium">
          TRY AGAIN
        </Button>
      </Link>
    </div>
  );
  return (
    <Container>
      {agents.matchAgents.length > 0 ? (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div>
            <Typography variant="h2" className="primary-color JennaSue-Font">
              Match agents result: {agents.income}
            </Typography>
            <div className="mt-medium mb-medium">
              <AgentsSorter />
            </div>
            <Link to="/">
              <Typography
                variant="subtitle1"
                className="secondary-color cursor-pointer action-text text-right"
              >
                Match with other income value
              </Typography>
            </Link>
            <AgentsList />{" "}
          </div>
        </Animated>
      ) : (
        emptyList
      )}
    </Container>
  );
};

export default Agents;
