"use client";
import EmailV from "@/Validators/EmailV";
import Button from "@/components/Button/Button";
import DivText from "@/components/DivisaoText/DivisaoText";
import GmailButton from "@/components/GmailButton/GmailButton";
import Input from "@/components/Input/InputPadrao/Input";
import InputSenha from "@/components/Input/InputSenha/InputSenha";
import Logo from "@/components/Logo/Logo";
import Tittle from "@/components/Tittle/Tittle";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [validate, setValidate] = useState({ email: "", password: "" });
  const [isEmail, setIsEmail] = useState(true);

  const { login } = useAuth();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (EmailV(validate.email)) {
      setIsEmail(true);
      login(validate.email, validate.password);
      return;
    }
    setIsEmail(false);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValidate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <section className="w-full max-w-[201px] md:max-w-[300px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-8"
      >
        <Logo typeLogo="two" width={121} height={90} className="md:hidden" />
        <Logo
          typeLogo="two"
          width={171}
          height={130}
          className="hidden md:block"
        />
        <Tittle>Faça o seu login</Tittle>
        <div className="w-full flex flex-col gap-2">
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={validate.email}
            onChange={handleChange}
          />
          {!isEmail && !!validate.email.length && (
            <div className="text-sm text-red-500">
              Insira um e-mail válido!!
            </div>
          )}
          <InputSenha
            placeholder="Senha"
            name="password"
            value={validate.password}
            onChange={handleChange}
          />
          <div className="flex items-center justify-between w-full">
            <label
              htmlFor="checkbox"
              className="flex items-center gap-1 text-[10px]"
            >
              <input
                id="primary-checked"
                type="checkbox"
                className=" w-3 h-3 text-primary bg-gray-100 rounded-sm focus:ring-primary dark:focus:ring-primary dark:ring-offset-primary focus:ring-0 focus:ring-offset-0 dark:bg-gray-700  "
              />
              Lembrar senha
            </label>
            <Link href="#" className="text-[10px] text-[#14D9B3]">
              Esqueci minha senha
            </Link>
          </div>
          <Button type="submit" className="mt-4 bg-primary text-white">
            Entrar
          </Button>
          <DivText className="text-[10px]">OU</DivText>
          <GmailButton className="font-bold">
            Faça login com sua conta Google
          </GmailButton>
          <p className="text-[8px] md:text-[10px] flex justify-center">
            Não tem uma conta?
            <a href="#" className="ml-1 text-[#14D9B3]">
              Registre-se
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
