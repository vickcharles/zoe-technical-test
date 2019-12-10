import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { agentsActions } from "../../actions/agents.actions";

const AgentsFilterInput = () => {
  const { matchAgents } = agentsActions;

  const [income, setIncome] = useState("");
  const dispatch = useDispatch();
  const matchIncome = () => {
    dispatch(matchAgents(income));
  };
  return (
    <div className="text-center">
      <Typography variant="h2" className="primary-color JennaSue-Font">
        Match Agents
      </Typography>
      <Typography
        paragraph={true}
        variant="subtitle1"
        gutterBottom
        className="grey-color"
      >
        type agents income to match
      </Typography>
      <div className="mt-medium">
        <TextField
          id="outlined-basic"
          fullWidth={true}
          value={income}
          onChange={e => setIncome(e.target.value)}
          label="Agent's Income"
          variant="filled"
          className="search-input"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className="mt-medium"
        onClick={matchIncome}
      >
        MATCH
      </Button>
    </div>
  );
};

export default AgentsFilterInput;
