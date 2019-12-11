import React, { useState } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { sorterActions } from "../../actions/sorter.actions";

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

const AgentsSorter = () => {
  const {
    sortByIdAsc,
    sortByIdDesc,
    sortByNameDesc,
    sortByNameAsc,
    sortByIncomeDesc,
    sortByIncomeAsc
  } = sorterActions;

  const dispatch = useDispatch();
  const classes = useStyles();

  const [sortById, setSortById] = useState("");
  const [sortByName, setSortByName] = useState("");
  const [sortByIncome, setSortByIncome] = useState("");

  const handleSortById = e => {
    const { value } = e.target;
    setSortById(value);

    if (value === "ASC") {
      dispatch(sortByIdAsc());
    }
    if (value === "DESC") {
      dispatch(sortByIdDesc());
    }
  };

  const handleSortByName = e => {
    const { value } = e.target;
    setSortByName(value);

    if (value === "ASC") {
      dispatch(sortByNameAsc());
    }
    if (value === "DESC") {
      dispatch(sortByNameDesc());
    }
  };

  const handleSortByIncome = e => {
    const { value } = e.target;
    setSortByIncome(value);

    if (value === "ASC") {
      dispatch(sortByIncomeAsc());
    }
    if (value === "DESC") {
      dispatch(sortByIncomeDesc());
    }
  };

  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Sort by id</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          fullWidth={true}
          value={sortById}
          onChange={handleSortById}
        >
          <MenuItem value="">
            <em>Sort by name</em>
          </MenuItem>
          <MenuItem value="ASC">Asc</MenuItem>
          <MenuItem value="DESC">Desc</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Sort by name
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          fullWidth={true}
          value={sortByName}
          onChange={handleSortByName}
        >
          <MenuItem value="">
            <em>Sort by name</em>
          </MenuItem>
          <MenuItem value="ASC">Asc</MenuItem>
          <MenuItem value="DESC">Desc</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Sort by income
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          fullWidth={true}
          value={sortByIncome}
          onChange={handleSortByIncome}
        >
          <MenuItem value="">
            <em>Sort by name</em>
          </MenuItem>
          <MenuItem value="ASC">Asc</MenuItem>
          <MenuItem value="DESC">Desc</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default AgentsSorter;
