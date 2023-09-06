import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-x-5 w-full items-center justify-between font-mono text-sm lg:flex">
      <Link className="border border-indigo-500 px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-lg" href={"/login"} replace>Sign-In</Link>
      <Link className="border border-indigo-500 px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-lg" href={"/dashboard"} replace>Dashboard</Link>
      </div>
    </main>
  )
}
