/**
 * AppProvider.tsx
 */

import React, { createContext, Dispatch, useEffect, useReducer } from "react";
import { IGameAction, IState, IThemeAction, StateActions, UserActions } from "./interfaces";
import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";
import gameReducer from "./reducers/gamereducer";

const APP_STATE_NAME = "testing";

//Check if state already exist and take the instance or set a default value
//in case there is no state in the localstorage
const initialState: IState = {
      user: {
        username: "",
        active: false,
      },
      theme: {
        dark: false,
      },
      game: {
        game: "World Cup",
      }
    };

const AppContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = (
  { user, theme, game, }: IState,
  action: UserActions | IThemeAction | IGameAction
) => ({
  user: userReducer(user, action),
  theme: themeReducer(theme, action),
  game: gameReducer(game, action),
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  // Watches for any changes in the state and keeps the state update in sync
  //Refresh state on any action dispatched
  useEffect(() => {
    //Update the localstorage after detected change
    localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext, AppProvider };