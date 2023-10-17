"use server";

const url = "https://aula-17-10-bice.vercel.app"



const getUserAuthenticated = async (user) => {
const rest = await fetch(url + "/user/authenticated",

  {
      method: "POST",
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify(user)
  }

)
  const userAuth = await rest.json()
  return userAuth
}


const getUsers = () => {

};

export { getUsers, getUserAuthenticated };