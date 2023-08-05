import UserCard from '@/components/userCard'
import { prisma } from '@/lib/prisma'

export default async function Users() {
  const users = await prisma.user.findMany()

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}
