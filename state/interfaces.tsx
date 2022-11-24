/**
 * interfaces.tsx
 */
 import { LOGIN, LOGOUT, THEME, GAME } from "./ActionTypes";
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
  
 
 export interface IState {
   user: IUser;
   theme: ITheme;
   game: IGame;
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
 
 export type UserActions = IUserLogin | IUserLogout;
 export type StateActions = UserActions | IThemeAction | IGameAction;