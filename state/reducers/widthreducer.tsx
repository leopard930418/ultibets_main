import { W_WIDTH } from "../ActionTypes";
import { IW_width, StateActions } from "../interfaces";

const widthReducer = (w_width: IW_width, action: StateActions) => {
  switch (action.type) {
    case W_WIDTH:
      return { ...w_width, ...action.payload };
    default:
      return w_width;
  }
};

export default widthReducer;