import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <h1 className='h1-bold font-black text-violet-700'>
        Welcome to the world of Next.js
      </h1>
    </>
  );
}
