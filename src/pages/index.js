import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Post from '@/components/Post'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {

  return (
    <>
    <div>
      <Head>
        <title>BlogKe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='posts'> 
       {posts.map(  (post, index) => (
        <Post post={post} key = {index} />
       ))}
      </div>

  </div>
    </>
  )
}

export async function getStaticProps(){

  //Get the markdown files from the posts directory
  const files = fs.readdirSync(path.join('posts'))
  
  //Get slug and frontmatter from posts
  const posts = files.map( filename => {

    //create a slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  console.log(posts)

  return{
    props: {
      posts,
    },
  }

}
