import {range, invokeMap} from "lodash";
import getInitialLevels from "./get-initial-levels";

export default getInitialLevels().map((levelData) => levelData.id);
