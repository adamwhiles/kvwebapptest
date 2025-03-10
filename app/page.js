import Image from "next/image";
import { getSecrets } from "./actions/getSecrets";
export const dynamic = "force-dynamic";
export default async function Home() {
  const secret = await getSecrets();
  console.log(secret);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl">Secrets....</h1>
      <ul>
        <li className="mb-5"><span className="font-extrabold text-lg ">Secret 1: </span> {secret.secret}</li>
        <li><span className="font-extrabold text-lg ">Secret 2: </span> {secret.secret2}</li>
      </ul>
    </div>
  );
}
