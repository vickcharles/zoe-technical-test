import { agentsConstants } from "../constants/agents.constants";

export const agentsActions = {
  fetchAgents,
  matchAgents
};

function fetchAgents(agents) {
  return {
    type: agentsConstants.FETCH_AGENTS,
    agents
  };
}

function matchAgents(income) {
  return {
    type: agentsConstants.FETCH_AGENTS,
    income
  };
}
