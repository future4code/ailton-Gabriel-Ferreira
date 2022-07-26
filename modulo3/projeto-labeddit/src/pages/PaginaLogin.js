import {
  Botao,
  Texto,
  Titulo,
  Formulario
} from "../global/GlobalStyle";
import { goToCadastro, goToFeed } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerBotoes,
  ContainerImagem,
  ContainerInputs,
  ContainerTextos,
  Linha,
} from "../styles/PaginaLoginStyle";
import { Input } from "../components/Input/Input";
import useForm from "../hooks/useForm";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";

export const PaginaLogin = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const login = (event) => {
    console.log("foi");
    event.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerImagem>
        <LabenuLogo tamanho={"84px"}/>        
      </ContainerImagem>
      <ContainerTextos>
        <Titulo tamanho={"2rem"}>LabEddit</Titulo>
        <Texto tamanho={"1rem"}>O projeto de rede social da Labenu</Texto>
      </ContainerTextos>
      <ContainerInputs>
        <Formulario onSubmit={login}>
          <Input
            type={"text"}
            name="email"
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
          />
          <Input
            type={"password"}
            name="password"
            value={form.password}
            onChange={onChange}
            label={"Senha"}
          />
        </Formulario>
      </ContainerInputs>
      <ContainerBotoes>
        <Botao
          borda={"none"}
          bordaRaio={"28px"}
          cor={"#fff"}
          gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          onClick={() => goToFeed(navigate)}
        >
          Continuar
        </Botao>
        <Linha/>
        <Botao
          borda={"2px solid #F9B24E"}
          bordaRaio={"28px"}
          cor={"#F9B24E"}
          gradiente={"#fff"}
          onClick={() => goToCadastro(navigate)}
        >
          Crie uma conta
        </Botao>
      </ContainerBotoes>
    </Container>
  );
};
