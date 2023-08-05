'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function FollowClient({
  targetUserId,
  isFollowing,
}: {
  targetUserId: string
  isFollowing: boolean
}) {
  // Local States
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const isMutating = isFetching || isPending

  const router = useRouter()

  // Functions
  const follow = async () => {
    setIsFetching(true)

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setIsFetching(false)

    startTransition(() => {
      router.refresh()
    })
  }

  const unfollow = async () => {
    setIsFetching(true)
    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    })
    setIsFetching(false)

    startTransition(() => {
      router.refresh()
    })
  }

  if (isFollowing) {
    return (
      <button disabled={isMutating} onClick={unfollow}>
        {isMutating ? 'Unfollowing' : 'Unfollow'}
      </button>
    )
  }
  return (
    <button disabled={isMutating} onClick={follow}>
      {isMutating ? 'Follwoing' : 'Follow'}
    </button>
  )
}
