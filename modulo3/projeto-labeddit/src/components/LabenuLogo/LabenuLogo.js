import React from "react";
import { LogoDiv, LogoPedaco } from "./LabenuLogoStyle";

export const LabenuLogo = ({tamanho}) => {
  return (
    <LogoDiv tamanho={tamanho}>
      <LogoPedaco cor={"#FE7E02"} direcao={"100% 0 0 0"} />
      <LogoPedaco cor={"#45525B"} direcao={"100% 0 0 0"} />
      <LogoPedaco cor={"#F9B24E"} direcao={"0 0 100% 0"} />
      <LogoPedaco cor={"#A8BBC6"} direcao={"0 0 100% 0"} />
    </LogoDiv>
  );
};
