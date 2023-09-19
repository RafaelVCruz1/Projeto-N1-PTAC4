'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Alter() {

   const [user, setUser] = useState({

    name: '',
    email: '',
    password: '',
    confirmpassword: ''

   });

   const { push, refresh } = useRouter();

   const userAlter = async (e) => {
    e.preventDefault();
    try {

        if (user.password !== user.confirmpassword) {
            toast.error("As senhas não são iguais");
            return;
        } 
        else {
            toast.success("Cadastro realizado com sucesso");
            setTimeout(() => {push("/pages/dashboard");}, 1000);
        }
    } 
    catch {
      toast.error("Error!");
      refresh();
    }
  };

   return (
    <div>
    <h1>Alterar Usuário</h1>
    <form onSubmit={userAlter}>
    <input
        placeholder='Nome'
        type="text"
        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
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
      <input
        placeholder='Confirme a senha'
        type='password'
        onChange={(e) => { setUser({ ...user, confirmpassword: e.target.value }) }}>
      </input>
      <button>Alterar</button>
    </form>
    <ToastContainer/>
  </div>
);
    

};