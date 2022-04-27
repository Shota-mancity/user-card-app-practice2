import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContexType
} from "../components/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContexType =>
  useContext(LoginUserContext);
