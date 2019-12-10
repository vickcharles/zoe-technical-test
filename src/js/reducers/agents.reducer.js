import { agentsConstants } from "../constants/agents.constants";

const initialState = {
  agents: []
};

const closest = (array, num) => {
  let i = 0;
  let minDiff = 1000;
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
        agents: filteredData.filter(e => e !== undefined)
      };

    default:
      return state;
  }
};
