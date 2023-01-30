import Link from "next/link";
import Image from "next/image";

export default function post({post}){
    return (
        <div className="card">
        <Image src={post.frontmatter.cover_image} alt="img" width={100} height={200}/>
        <div className="post-date"> Posted on {post.frontmatter.date}</div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="btn"> 
        Read More
        </Link>
        </div>
    )
}