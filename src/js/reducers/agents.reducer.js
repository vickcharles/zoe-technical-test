import { agentsConstants } from "../constants/agents.constants";

const initialState = {
  agents: []
};

export const agents = (state = initialState, action) => {
  switch (action.type) {
    case agentsConstants.FETCH_AGENTS:
      return {
        ...state,
        agents: action.agents
      };
    case agentsConstants.MATCH_AGENTS:
      return {
        ...state,
        agents: state.agents.reduce((prev, curr) => {
          return Math.abs(curr - action.income) < Math.abs(prev - action.income)
            ? curr
            : prev;
        })
      };
    default:
      return state;
  }
};
