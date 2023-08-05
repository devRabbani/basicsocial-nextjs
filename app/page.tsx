import Image from 'next/image'
import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  console.log('Sesssssssion', session)

  if (!session) {
    redirect('api/auth/signin')
  }

  return (
    <>
      <h1>Hello this is home</h1>
    </>
  )
}
