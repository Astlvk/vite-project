import { AppState } from "./modules/app/interface";

export type RootState = {

}

export interface AllState extends RootState {
  app: AppState
}
