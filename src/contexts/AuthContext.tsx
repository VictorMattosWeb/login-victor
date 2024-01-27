"use client";
import { ReactNode, createContext, useContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  Auth,
} from "firebase/auth";
import { auth } from "@/Firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("que legalzinho deu certo hihi");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("que legalzinho deu errado hihi");
        console.log({ errorCode, errorMessage });
      });
  }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
