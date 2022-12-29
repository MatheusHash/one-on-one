import { deleteCookie } from "cookies-next";

export default async function removeCookie(){
    console.log('removendo cookie');
    deleteCookie('userLooged');
    return 0;
}