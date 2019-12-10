import React from "react";

import { Card, Grid, Avatar, Typography } from "@material-ui/core";
import "../../../assets/sass/AgentCard.sass";

const AgentCard = ({ income, name, avatar }) => {
  return (
    <Card className="card mt-medium">
      <Grid container>
        <Grid xs={12} md={2}>
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src={avatar}
          />
        </Grid>
        <Grid xs={12} md={10}>
          <Typography>{name}</Typography>
          <Typography>Income: {income}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentCard;
