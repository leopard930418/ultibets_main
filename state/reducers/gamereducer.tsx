import { GAME } from "../ActionTypes";
import { IGame, StateActions } from "../interfaces";

const gameReducer = (game: IGame, action: StateActions) => {
  switch (action.type) {
    case GAME:
      return { ...game, ...action.payload };
    default:
      return game;
  }
};

export default gameReducer;