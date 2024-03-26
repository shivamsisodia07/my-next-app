"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";//must import from navigation instead next/router.problem with next/router

export default function Home() {
  const router =useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <navbar> 
      <Link href="/about">About</Link>
      <Link href="/login" >Login</Link>
      </navbar>
      
    </main>
  );
}
