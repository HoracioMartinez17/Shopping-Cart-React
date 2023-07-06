import { createContext } from "react";

interface User {
  id: number;
  name: string;
}


interface AuthContextType {
  isLogged: boolean;
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
