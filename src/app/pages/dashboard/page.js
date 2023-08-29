import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUser from '@/app/ListUser/ListUser';
import { Suspense } from "react";

export default async function Dashboard() {
<<<<<<< HEAD
<<<<<<< HEAD
   let listaUsers = getUsers();
    return (
        <div>
          {listaUsers.map( (user) =>

          <p>{user.name}</p>

          )}
=======
    let lista = getUsers();
    let usuario = getUsers();
    return (
        <div>
=======
    let lista = getUsers();
    let usuario = getUsers();
    return (
        <div>
>>>>>>> 94199b2f9d2821b73416959b789795ec7c4f4be7
            <Suspense fallback={<p>carregando...</p>}>
                <ListUser users={usuario}/>
                {lista.map((user) => (
                    <h1>{user.name}</h1>
                ))}
            </Suspense>
<<<<<<< HEAD
>>>>>>> 94199b2f9d2821b73416959b789795ec7c4f4be7
=======
>>>>>>> 94199b2f9d2821b73416959b789795ec7c4f4be7
        </div>
    );
};