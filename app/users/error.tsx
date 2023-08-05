'use client'

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  console.error(error.message)
  return (
    <div>
      <p>Something went wrong try again!</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}
