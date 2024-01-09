import axios from "axios";
import { toast } from "react-toastify";

const url = axios.create({
   baseURL: "http://localhost:8880",
   headers: {
      Authorization: `Bearer token`,
   },
});

const useApi = () => ({
   createCandidate: async (name: string, email: string) => {
      try {
         const { data } = await url.post("/create-user_portal_admissoes", {
            name,
            email,
         });
         toast.success(data.message);
         return data;
      } catch (error: any) {
         return toast.error(error.response.data.message);
      }
   },
   getAllCandidates: async () => {
      try {
         const { data } = await url.get("/user");
         return data;
      } catch (error: any) {
         return toast.error(error.response.data.message);
      }
   },

   findOneUser: async (_id: string) => {
      const { data } = await url(`/candidate/users_portal_admissoes/${_id}`);
      return data;
   },

   findStep: async (candidateId: string) => {
      const { data } = await url(`/candidate/step/${candidateId}`);
      return data;
   },

   signin: async (login: string, password: string) => {
      try {
         const { data } = await url.post("/auth/signin", {
            login,
            password,
         });
         return data;
      } catch (e: any) {
         return toast.error(e.response.data.message);
      }
   },

   // RG - PENDENTE
   createRg: async (
      pdfRg: string,
      nomeCompleto: string,
      socialName: string,
      sexo: string,
      racaCor: string,
      estadoCivil: string,
      nacionalidade: string,
      estadoNascimento: string,
      cidadeNascimento: string,
      dataNascimento: string,
      nomeDaMae: string,
      nomeDoPai: string,
      numRg: string,
      dataExpedicaoRg: string,
      orgaoEmissorRg: string,
      ufEmissorRg: string,
      _id: string
   ) => {
      try {
         const { data } = await url.post(`/candidate/create-wallet-rg/${_id}`, {
            pdfRg,
            nomeCompleto,
            socialName,
            sexo,
            racaCor,
            estadoCivil,
            nacionalidade,
            estadoNascimento,
            cidadeNascimento,
            dataNascimento,
            nomeDaMae,
            nomeDoPai,
            numRg,
            dataExpedicaoRg,
            orgaoEmissorRg,
            ufEmissorRg,
         });

         return data;
      } catch (e: any) {
         return toast.error(e.response.data.message);
      }
   },
   findRg: async (candidateId: string) => {
      const { data } = await url.get(`/candidate/get-wallet-rg/${candidateId}`);
      return data;
   },
   updateRg: async (
      pdfRg: string,
      nomeCompleto: string,
      socialName: string,
      sexo: string,
      racaCor: string,
      estadoCivil: string,
      nacionalidade: string,
      estadoNascimento: string,
      cidadeNascimento: string,
      dataNascimento: string,
      nomeDaMae: string,
      nomeDoPai: string,
      numRg: string,
      dataExpedicaoRg: string,
      orgaoEmissorRg: string,
      ufEmissorRg: string,
      candidateId: string
   ) => {
      try {
         const { data } = await url.patch(
            `/candidate/update-wallet-rg/${candidateId}`,
            {
               pdfRg,
               nomeCompleto,
               socialName,
               sexo,
               racaCor,
               estadoCivil,
               nacionalidade,
               estadoNascimento,
               cidadeNascimento,
               dataNascimento,
               nomeDaMae,
               nomeDoPai,
               numRg,
               dataExpedicaoRg,
               orgaoEmissorRg,
               ufEmissorRg,
            }
         );
         toast.success(data.message)
         return data;
      } catch (e: any) {
         return toast.error(e.response.data.message);
      }
   },

   // CTPS
   createCtps: async (
      _id: string,
      pdfCarteira: string,
      pdfCtpsName: string,
      numCarteira: string,
      numSerieCarteira: string,
      dataEmissao: Date,
      ufEmissorCarteira: string
   ) => {
      try {
         const { data } = await url.post(
            `/doc/create-wallet-work/${_id}`,
            {
               pdfCarteira,
               pdfCtpsName,
               numCarteira,
               numSerieCarteira,
               dataEmissao,
               ufEmissorCarteira,
            }
         );
         if (data) {
            toast.success(data.message);
         }
         return data;
      } catch (error: any) {
         return toast.error(error.response.data.message);
      }
   },
   findCtps: async (candidateId: string) => {
      const { data } = await url.get(
         `/doc/get-wallet-work/${candidateId}`
      );
      return data;
   },
   updateCtps: async (
      candidateId: string,
      pdfCarteira: string,
      pdfCtpsName: string,
      numCarteira: string,
      numSerieCarteira: string,
      dataEmissao: Date,
      ufEmissorCarteira: string
   ) => {
      try {
         const { data } = await url.patch(
            `/doc/update-wallet-work/${candidateId}`,
            {
               pdfCarteira,
               pdfCtpsName,
               numCarteira,
               numSerieCarteira,
               dataEmissao,
               ufEmissorCarteira,
            }
         );

         toast.success(data.message);
         return data;
      } catch (error: any) {
         console.log(error);
         return toast.error(error.response.data.message);
      }
   },

   // CNH
   createCnh: async (
      _id: string,
      temCnh: boolean,
      pdfCnh: string,
      categoriaCnh: string,
      numeroRegistroCnh: string,
      dataPrimeiraCnh: string,
      orgaoEmissorCnh: string,
      ufOrgaoEmissorCnh: string,
      dataEmissaoCnh: string,
      dataValidadeCnh: string
   ) => {
      try {
         const { data } = await url.post(`/candidate/create-cnh/${_id}`, {
            temCnh,
            pdfCnh,
            categoriaCnh,
            numeroRegistroCnh,
            dataPrimeiraCnh,
            orgaoEmissorCnh,
            ufOrgaoEmissorCnh,
            dataEmissaoCnh,
            dataValidadeCnh,
         });

         if (data) {
            toast.success(data.message);
         }

         return data;
      } catch (e: any) {
         return toast.error(e.response.data.message);
      }
   },
   findCnh: async (candidateId: string) => {
      const { data } = await url.get(`/candidate/get-cnh/${candidateId}`);
      return data;
   },
   updateCnh: async (
      candidateId: string,
      temCnh: boolean,
      pdfCnh: string,
      categoriaCnh: string,
      numeroRegistroCnh: string,
      dataPrimeiraCnh: string,
      orgaoEmissorCnh: string,
      ufOrgaoEmissorCnh: string,
      dataEmissaoCnh: string,
      dataValidadeCnh: string
   ) => {
      try {
         const { data } = await url.patch(
            `/candidate/update-cnh/${candidateId}`,
            {
               temCnh,
               pdfCnh,
               categoriaCnh,
               numeroRegistroCnh,
               dataPrimeiraCnh,
               orgaoEmissorCnh,
               ufOrgaoEmissorCnh,
               dataEmissaoCnh,
               dataValidadeCnh,
            }
         );
         toast.success(data.message);
      } catch (e: any) {
         return toast.error(e.response.data.message);
      }
   },

   // CPF
   createCpf: async (pdfCpf: string, numCpf: string, candidateId: string) => {
      try {
         const { data } = await url.post(
            `/candidate/create-cpf/${candidateId}`,
            {
               pdfCpf,
               numCpf,
            }
         );
         toast.success(data.message);
         return data;
      } catch (error: any) {
         console.log(error);
         return toast.error(error.response.data.message);
      }
   },
   findCpf: async (candidateId: string) => {
      const { data } = await url.get(`/candidate/get-cpf/${candidateId}`);
      return data;
   },
   updateCpf: async (pdfCpf: string, numCpf: string, candidateId: string) => {
      try {
         const { data } = await url.patch(
            `/candidate/update-cpf/${candidateId}`,
            {
               pdfCpf,
               numCpf,
            }
         );
         toast.success(data.message);
         return data;
      } catch (error: any) {
         console.log(error);
         return toast.error(error.response.data.message);
      }
   },
});

export default useApi;
