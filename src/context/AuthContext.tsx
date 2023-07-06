import { createContext } from "react";

interface AuthContextType {
  isLogged: boolean;
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
