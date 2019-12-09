import { agentsConstants } from "../constants/agents.constants";

const initialState = {
  agents: []
};

export const agents = (state = initialState, action) => {
  switch (action.type) {
    case agentsConstants.FETCH_AGENTS:
      return {
        ...state,
        agents: [...state.agents]
      };
    default:
      return state;
  }
};
