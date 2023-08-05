import { NextResponse } from 'next/server'

const posts = [
  {
    title: 'Getting Started with JavaScript',
    slug: 'getting-started-with-javascript',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat non elit quis feugiat. Suspendisse in felis volutpat, aliquet velit at, scelerisque turpis. Nulla facilisi.',
  },
  {
    title: 'Introduction to Web Development',
    slug: 'introduction-to-web-development',
    content:
      'Pellentesque consequat justo et purus pellentesque, in auctor urna venenatis. Curabitur elementum, sem eu consectetur sollicitudin, elit urna euismod turpis, ac venenatis odio sapien ac mi.',
  },
  {
    title: 'The Basics of CSS',
    slug: 'the-basics-of-css',
    content:
      'Maecenas faucibus, felis a auctor aliquet, lorem velit feugiat odio, eu rutrum ligula nisi eget nisi. Curabitur eu mi rhoncus, commodo arcu at, tincidunt erat.',
  },
  {
    title: 'Tips for Writing Clean Code',
    slug: 'tips-for-writing-clean-code',
    content:
      'Nullam euismod ipsum nec ipsum interdum, a facilisis est varius. In hac habitasse platea dictumst. Sed scelerisque felis at metus vestibulum, id suscipit orci posuere.',
  },
  {
    title: 'Mastering React Components',
    slug: 'mastering-react-components',
    content:
      'Etiam facilisis odio eget lacus auctor vestibulum. Vestibulum ut elit at urna dignissim vestibulum a eu enim. Fusce eget odio sit amet arcu efficitur tincidunt sit amet non turpis.',
  },
  {
    title: 'Advanced Node.js Concepts',
    slug: 'advanced-nodejs-concepts',
    content:
      'Phasellus tincidunt nulla id turpis mollis, vel laoreet elit ultrices. Sed consequat luctus nulla quis consectetur. Fusce malesuada arcu a nunc egestas, a aliquam eros facilisis.',
  },
  {
    title: 'Introduction to Data Structures',
    slug: 'introduction-to-data-structures',
    content:
      'Aenean id odio ultrices, sollicitudin eros nec, posuere urna. Nullam id fermentum odio, sit amet aliquet velit. Suspendisse vestibulum arcu non aliquam laoreet.',
  },
  {
    title: 'Understanding RESTful APIs',
    slug: 'understanding-restful-apis',
    content:
      'Duis id augue a sem feugiat ultrices eget eu ipsum. Integer ut neque eu sapien volutpat viverra. Proin nec ex facilisis, euismod nisl quis, sollicitudin ipsum.',
  },
  {
    title: 'Python for Beginners',
    slug: 'python-for-beginners',
    content:
      'Praesent aliquet libero eget risus malesuada, vel consequat mi tincidunt. Sed eu hendrerit dui. Donec bibendum tristique libero, eget convallis erat gravida nec.',
  },
  {
    title: 'Introduction to UX Design',
    slug: 'introduction-to-ux-design',
    content:
      'Aenean scelerisque dolor vitae consectetur vestibulum. Integer vel consectetur mauris. Vestibulum euismod iaculis purus, sit amet varius ipsum ultrices at.',
  },
]

export async function GET() {
  return NextResponse.json(posts, { status: 200 })
}
