import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUser from '@/app/ListUser/ListUser';
import { Suspense } from "react";

export default async function Alter() {

   let lista = getUsers();
   return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handlerLogin}>
    <input
        placeholder='Nome'
        type="text"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input>
      <input
        placeholder='E-mail'
        type="email"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input>
      <input
        placeholder='Senha'
        type='password'
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
      </input>
      <button>Alterar</button>
    </form>
    <ToastContainer/>
  </div>
);
    

};