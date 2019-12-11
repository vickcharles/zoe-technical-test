import { sorterConstants } from "../constants/sorter.constants";

export const sorterActions = {
  sortByIdDesc,
  sortByIdAsc,
  sortByNameDesc,
  sortByNameAsc,
  sortByIncomeDesc,
  sortByIncomeAsc
};

function sortByIdDesc() {
  return {
    type: sorterConstants.SORT_BY_ID_DESC
  };
}

function sortByIdAsc() {
  return {
    type: sorterConstants.SORT_BY_ID_ASC
  };
}

function sortByNameDesc() {
  return {
    type: sorterConstants.SORT_BY_NAME_DESC
  };
}

function sortByNameAsc() {
  return {
    type: sorterConstants.SORT_BY_NAME_ASC
  };
}

function sortByIncomeDesc() {
  return {
    type: sorterConstants.SORT_BY_INCOME_DESC
  };
}

function sortByIncomeAsc() {
  return {
    type: sorterConstants.SORT_BY_NAME_ASC
  };
}
