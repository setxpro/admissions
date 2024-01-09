import CPF from "../../pages/CPF";
import ConsultaCPF from "../../pages/ConsultaCPF";
import ValeTransporte from "../../pages/ValeTransporte";
import ComprovanteEscolaridade from "../../pages/ComprovanteEscolaridade";
import CertidaoNascimento from "../../pages/CertidaoNascimento";
import RG from "../../pages/RG";
import TituloEleitor from "../../pages/TituloEleitor";
import ComprovantePisPasep from "../../pages/ComprovantePisPasep";
import Reservista from "../../pages/Reservista";
import ComprovanteResidencia from "../../pages/ComprovanteResidencia";
import CartaoPassagem from "../../pages/CartaoPassagem";
import DadosBancarios from "../../pages/DadosBancarios";
import Esocial from "../../pages/Esocial";
import DadosDependente from "../DadosDependente";

import DepRG from "../../components/DepRG"
import PlainFileInput from "../PlainFileInput";
import { Link } from "react-router-dom";

interface FormType {
   id: number;
   title: string;
   form: JSX.Element;
}

export const higherForm: FormType[] = [
   {
      id: 1,
      title: "Carteira de Trabalho (CTPS)",
      form: <Link to="/create-ctps" id="btn-steps">IR PARA A CTPS</Link>,
   },
   {
      id: 2,
      title: "Carteira de Identidade (RG)",
      form:  <Link to="/create-rg" id="btn-steps">IR PARA O RG</Link>,
   },
   {
      id: 3,
      title: "Carteira de Habilitação (CNH)",
      form: <Link to="/create-cnh" id="btn-steps">IR PARA A CNH</Link>,
   },
   {
      id: 4,
      title: "CPF",
      form: <Link to="/create-cpf" id="btn-steps">IR PARA O CPF</Link>,
   },
   {
      id: 5,
      title: "Título de eleitor",
      form: <TituloEleitor />,
   },
   {
      id: 6,
      title: "Comprovante de PIS/Pasep",
      form: <ComprovantePisPasep />,
   },
   {
      id: 7,
      title: "Certificado de Reservista",
      form: <Reservista />,
   },
   {
      id: 8,
      title: "Comprovante de residência",
      form: <ComprovanteResidencia />,
   },
   {
      id: 9,
      title: "Comprovante de Escolaridade",
      form: <ComprovanteEscolaridade />,
   },
   {
      id: 10,
      title: "Certidão de Nascimento",
      form: <CertidaoNascimento />,
   },
   {
      id: 11,
      title: "Cópia do Cartão de Passagem",
      form: <CartaoPassagem />,
   },
   {
      id: 12,
      title: "Dados bancários - Itaú",
      form: <DadosBancarios />,
   },

   {
      id: 13,
      title: "Qualificação Manual - eSocial",
      form: <Esocial />,
   },
   {
      id: 14,
      title: "Consulta CPF",
      form: <ConsultaCPF />,
   },
   {
      id: 15,
      title: "Solicitação de Vale Transporte",
      form: <ValeTransporte />,
   },
   // {
   //    id: 16,
   //    title: "Dependentes",
   //    form: <Dependents />,
   // },
];

export const lowerFormExConjuge: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Certidão de casamento com separação e/ou divórcio averbado",
      form: <PlainFileInput title="Certidão de casamento com separação e/ou divórcio averbado"/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];


export const lowerFormConjuge: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Certidão de casamento",
      form: <PlainFileInput title="Certidão de casamento"/>,
   },
   {
      id: 7,
      title: "RG",
      form: <DepRG/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];

export const FilhoEnteadoForm: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Certidão de nascimento",
      form: <PlainFileInput title="Certidão de nascimento"/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];

export const FilhoEnteadoUni: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "RG",
      form: <RG/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];

export const lowerFormIrmaoOuNetosOuBis: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Guarda judicial",
      form: <PlainFileInput title="Guarda judicial"/>,
   },
   {
      id: 6,
      title: "Certidão de nascimento",
      form: <PlainFileInput title="Certidão de nascimento"/>,
   },
   {
      id: 8,
      title: "RG",
      form: <DepRG/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];

export const lowerFormPaisAvosBi: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Certidão de nascimento",
      form: <PlainFileInput title="Certidão de nascimento"/>,
   },
   {
      id: 8,
      title: "RG",
      form: <DepRG/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];

export const lowerFormMenorIncapaz: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Certidão de interdição",
      form: <PlainFileInput title="Certidão de interdição"/>,
   },
   {
      id: 7,
      title: "Certidão de tutela ou curatela",
      form: <PlainFileInput title="Certidão de tutela ou curatela"/>,
   },
   {
      id: 8,
      title: "Certidão de nascimento",
      form: <PlainFileInput title="Certidão de nascimento"/>,
   },
   {
      id: 9,
      title: "RG",
      form: <DepRG/>,
   },
   {
      id: 10,
      title: "CPF",
      form: <CPF />,
   },
];

export const lowerFormAgregadosOuOutros: FormType[] = [
   {
      id: 1,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },

   {
      id: 2,
      title: "CPF",
      form: <CPF />,
   },
];

export const lowercompanheiroFilhoOuFilhoCincoOuUniEstavel: FormType[] = [
   {
      id: 5,
      title: "Dados do dependente",
      form: <DadosDependente />,
   },
   {
      id: 6,
      title: "Declaração de união estável",
      form:  <PlainFileInput title="Declaração de união estável"/>,
   },
   {
      id: 8,
      title: "RG",
      form: <DepRG/>,
   },
   {
      id: 8,
      title: "CPF",
      form: <CPF />,
   },
];
