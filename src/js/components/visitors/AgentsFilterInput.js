import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const AgentsFilterInput = () => {
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
          label="Agent's Income"
          variant="filled"
          className="search-input"
        />
      </div>
      <Button variant="contained" color="primary" className="mt-medium">
        MATCH
      </Button>
    </div>
  );
};

export default AgentsFilterInput;
