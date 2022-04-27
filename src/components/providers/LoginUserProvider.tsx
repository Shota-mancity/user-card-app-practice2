import React, {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from "react";
import { User } from "../../types/api/user";

type LoginUser=User &{isAdmin: boolean}

export type LoginUserContexType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};
export const LoginUserContext = createContext<LoginUserContexType>(
  {} as LoginUserContexType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
