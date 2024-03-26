'use client'

import {
  type Session,
  createClientComponentClient
} from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { GithubIcon } from './icons'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handlesignin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handlesignout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      {session === null
        ? (
        <button
          onClick={handlesignin}
          type="button"
          className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2"
        >
          <GithubIcon />
          Sign in with Github
        </button>
          )
        : (
        <Button onClick={handlesignout}>Sign out</Button>
          )}
    </header>
  )
}
