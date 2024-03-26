import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Sign in on Agorath</h1>
      <AuthButtonServer />
    </section>
  )
}
