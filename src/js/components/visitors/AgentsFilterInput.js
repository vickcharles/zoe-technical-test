import React, { useState, useEffect, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { agentsActions } from "../../actions/agents.actions";
import { Redirect } from "react-router-dom";
import { Animated } from "react-animated-css";

const AgentsFilterInput = () => {
  const { matchAgents } = agentsActions;
  const incomeRef = useRef();

  const [income, setIncome] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const inputValidator = value => {
    let error = "";
    const re = /^[0-9\b]+$/;
    if (value.length > 5 || value.length < 5) {
      error = "please type 5 digits";
    }
    if (!re.test(value)) {
      error = "plese type only numbers";
    }

    return error;
  };

  useEffect(() => {
    incomeRef.current.focus();
  }, []);

  const matchIncome = e => {
    e.preventDefault();
    const error = inputValidator(income);
    setError(error);
    if (error === "") {
      dispatch(matchAgents(income));
      setRedirect(true);
    }
  };

  return (
    <Animated
      animationIn="bounceInDown"
      animationOut="fadeOut"
      isVisible={true}
    >
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
        <form onSubmit={matchIncome}>
          <div className="mt-medium">
            <TextField
              id="outlined-basic"
              fullWidth={true}
              error={!!error}
              inputRef={incomeRef}
              helperText={error}
              value={income}
              onChange={e => {
                setIncome(e.target.value);
                setError("");
              }}
              label="Agent's Income"
              variant="filled"
              className="search-input"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className="mt-medium"
            type="submit"
          >
            MATCH
          </Button>
        </form>
        {redirect && <Redirect to="/agents" />}
      </div>
    </Animated>
  );
};

export default AgentsFilterInput;
