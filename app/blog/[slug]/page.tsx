interface Post {
  title: string
  slug: string
  content: string
}

interface Props {
  params: {
    slug: string
  }
}

export default async function Blogs({ params }: Props) {
  const posts: Post[] = await fetch(
    process.env.LOCAL_URL + '/api/content'
  ).then((data) => data.json())

  const post = posts.find((item) => item.slug === params.slug)!

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
