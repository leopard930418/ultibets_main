/**
 * interfaces.tsx
 */
 import { LOGIN, LOGOUT, THEME, GAME, W_WIDTH } from "./ActionTypes";
 export interface IUser {
   username: string;
   active: boolean;
 }
 export interface ITheme {
   dark: boolean;
 }

 export interface IGame {
    game: string;
  }
  export interface IW_width{
    w_width: number;
  }
 
 export interface IState {
   user: IUser;
   theme: ITheme;
   game: IGame;
   w_width: IW_width;
 }
 
 export interface IUserLogin {
   type: typeof LOGIN;
   payload: IUser;
 }
 
 export interface IUserLogout {
   type: typeof LOGOUT;
   payload: {};
 }
 
 export interface IThemeAction {
   type: typeof THEME;
   payload: { toggle: boolean };
 }

 export interface IGameAction {
    type: typeof GAME;
    payload: { game: string };
  }
  export interface IWidthAction {
    type: typeof W_WIDTH;
    payload: { w_width: number };
  }
 export type UserActions = IUserLogin | IUserLogout;
 export type StateActions = UserActions | IThemeAction | IGameAction | IWidthAction;