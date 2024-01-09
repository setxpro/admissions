export type User = {
   _id: string;
   name: string;
   email: string;
   cpf: string;
   password: string;
   status: boolean;
   isAdmin: boolean;
   finished: boolean;
   role: string;
   token: string;
   steps: number[];
   middlename: string;
   hasBi: boolean;
   isApproved: boolean;
   codAprov: string;
   phone: string;
   login: string;
   assignment: string;
   avatar: string;
};

export type UserGeneric = Partial<User>; 