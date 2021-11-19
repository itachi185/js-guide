import * as constants from "../constants.js";

function logger(msg, log = constants.TYPE_LOG) {
  console[log](msg);
}

export default logger;
