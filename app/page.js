import Image from "next/image";
import { getSecrets } from "./actions/getSecrets";

export default async function Home() {
  const secret = await getSecrets();
  console.log(secret);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text">Secrets....</h1>
      <ul>
        <li>Secret 1: {secret.secret}</li>
      </ul>
    </div>
  );
}
