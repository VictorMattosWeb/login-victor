import Button from "@/components/Button/Button";
import DivText from "@/components/DivisaoText/DivisaoText";
import Input from "@/components/Input/InputPadrao/Input";
import InputSenha from "@/components/Input/InputSenha/InputSenha";
import Logo from "@/components/Logo/Logo";
import Tittle from "@/components/Tittle/Tittle";

export default function Cadastro() {
  return (
    <section className="w-full max-w-[201px] md:max-w-[300px]">
      <form className="flex flex-col items-center w-full gap-8">
        <Logo typeLogo="two" width={121} height={90} className="md:hidden" />
        <Logo
          typeLogo="two"
          width={171}
          height={130}
          className="hidden md:block"
        />
        <Tittle>Cadastre-se</Tittle>
        <div className="w-full flex flex-col  gap-2">
          <DivText className=" flex text-nowrap text-[10px]">
            Dados Pessoais
          </DivText>
          <Input type="text" name="name" placeholder="Email" />
          <DivText className=" flex text-nowrap text-[10px]">Acesso</DivText>
          <InputSenha name="password" placeholder="Senha" />
          <InputSenha name="password" placeholder=" Confirmar senha" />
          <Button type="submit" className="mt-4 bg-primary text-white">
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  );
}
