import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import FollowClient from './FollowClient'

export default async function FollowButton({
  targetUserId,
}: {
  targetUserId: string
}) {
  const session = await getServerSession(authOptions)

  const userEmail = session?.user?.email!

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: userEmail },
    })
    .then((user) => user?.id)

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  })

  return (
    <FollowClient isFollowing={!!isFollowing} targetUserId={targetUserId} />
  )
}
