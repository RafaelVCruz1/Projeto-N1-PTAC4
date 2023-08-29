import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUser from '@/app/ListUser/ListUser';
import { Suspense } from "react";

export default async function Dashboard() {
    let lista = getUsers();
    let usuario = getUsers();
    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <ListUser users={usuario}/>
                {lista.map((user) => (
                    <h1>{user.name}</h1>
                ))}
            </Suspense>
        </div>
    );
};