import { notFound } from "next/navigation";
import Not_found from "./not-found";

async function TakeTime() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
}

export default async function admin()
{ 
  await TakeTime();
//  notFound();  => trigger not-found.js
//   throw new Error();   => trigger error.js
  
    return (
        <h1>This is a Admin panel</h1>
    )
}