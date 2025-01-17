import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { tasksReducer } from "./tasks/reducer";
import { filtersReducer } from "./filters/reducer";

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
    filters: filtersReducer(state.filters, action),
  };
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);