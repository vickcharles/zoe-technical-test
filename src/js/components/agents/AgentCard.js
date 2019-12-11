import React from "react";

import { Card, Grid, Avatar, Typography } from "@material-ui/core";
import "../../../assets/sass/AgentCard.sass";

const AgentCard = ({ income, name, avatar, id }) => {
  return (
    <Card className="card mt-medium">
      <Grid container>
        <Grid xs={12} md={12}>
          <Avatar className="avatar m-auto" alt="Remy Sharp" src={avatar} />
        </Grid>
        <Grid xs={12} md={12} className="text-center mt-medium">
          <Typography>{name}</Typography>
          <Typography>Income: {income}</Typography>
          <Typography>Id: {id}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentCard;
