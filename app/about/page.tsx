import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Basic Social',
}

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Basic Social is a indie social media company. Built with nextjs13 and
        Prisma
      </p>
    </div>
  )
}
