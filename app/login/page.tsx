import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-colors duration-300 dark:border-slate-700/70 dark:bg-slate-900/95 dark:shadow-black/40">
        <div className="mb-8 text-center">
         <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500 text-3xl font-black text-white">
            <Image
              src="/images.png"
              alt="Skylark logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-semibold tracking-tight">skylark</h1>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Log in to your account using email or phone number.
          </p>
        </div>

        <form className="space-y-5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Phone number / email address
            <input
              type="text"
              placeholder="Phone number / email address"
              className="mt-3 w-full rounded-3xl border border-slate-200/80 bg-slate-100 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700/70 dark:bg-slate-950 dark:text-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
            <input
              type="password"
              placeholder="Password"
              className="mt-3 w-full rounded-3xl border border-slate-200/80 bg-slate-100 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700/70 dark:bg-slate-950 dark:text-white"
            />
          </label>

          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="lg">
            Log in
          </Button>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
          By signing up or logging in, you consent to Skylark&apos;s{' '}
          <Link href="#" className="text-slate-700 underline-offset-2 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white hover:underline">
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-slate-700 underline-offset-2 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
          <Link href="#" className="hover:text-slate-950 dark:hover:text-white">
            Forgot password?
          </Link>
          <Link href="/signup" className="font-medium text-slate-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-300">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
