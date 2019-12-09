import { agentsConstants } from "../constants/agents.constants";

export const moviesActions = {
  fetchAgents
};

function fetchAgents(agents) {
  return {
    type: agentsConstants.FETCH_AGENTS,
    agents
  };
}
