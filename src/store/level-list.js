import {range, invokeMap} from "lodash";
import initialState from "./initial-state";

export default initialState.levels.map((levelData) => levelData.id);
