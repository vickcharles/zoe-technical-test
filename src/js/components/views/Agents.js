import React from "react";
import AgentsList from "../agents/AgentsList";
import { Container, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const Agents = () => {
  const agents = useSelector(state => state.agents);
  const emptyList = (
    <div className="text-center">
      <Typography variant="h2" className="primary-color JennaSue-Font">
        there is not match : (
      </Typography>
      <Typography variant="subtitle1">
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
          <AgentsList />{" "}
        </Animated>
      ) : (
        emptyList
      )}
    </Container>
  );
};

export default Agents;
