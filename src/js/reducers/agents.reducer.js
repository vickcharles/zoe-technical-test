import { agentsConstants } from "../constants/agents.constants";
import { sorterConstants } from "../constants/sorter.constants";

const initialState = {
  agents: [],
  matchAgents: [],
  income: 0
};

const closest = (array, num) => {
  let i = 0;
  let minDiff = 1500;
  let ans;

  for (i in array) {
    let m = Math.abs(num - array[i].income);
    if (m < minDiff) {
      minDiff = m;
      ans = array[i];
    }
  }
  return ans;
};

export const agents = (state = initialState, action) => {
  switch (action.type) {
    case agentsConstants.FETCH_AGENTS:
      return {
        ...state,
        agents: action.agents
      };
    case sorterConstants.SORT_BY_ID_DESC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.id > b.id ? 1 : -1)
        )
      };
    case sorterConstants.SORT_BY_ID_ASC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.id > b.id ? -1 : 1)
        )
      };
    case sorterConstants.SORT_BY_NAME_DESC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.name > b.name ? 1 : -1)
        )
      };
    case sorterConstants.SORT_BY_NAME_ASC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.name > b.name ? -1 : 1)
        )
      };
    case sorterConstants.SORT_BY_INCOME_DESC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.income > b.income ? 1 : -1)
        )
      };
    case sorterConstants.SORT_BY_INCOME_ASC:
      return {
        ...state,
        matchAgents: state.matchAgents.sort(
          (a, b) => 0 - (a.income > b.income ? -1 : 1)
        )
      };
    case agentsConstants.MATCH_AGENTS:
      const filteredData = [];
      let stateCopy = state.agents;

      for (var i = 0; i < state.agents.length - 1; i++) {
        const data = closest(stateCopy, action.income);
        filteredData.push(data);
        if (data) {
          stateCopy = stateCopy.filter(d => d.income !== data.income);
        }
      }

      return {
        ...state,
        matchAgents: filteredData.filter(e => e !== undefined),
        income: action.income
      };

    default:
      return state;
  }
};
