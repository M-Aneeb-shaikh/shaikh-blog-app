'use client'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Post from './Post';

export default function BlogPostContainer() {
  //state variables
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts
  useEffect(() => {
    fetch("/api/post/fetch/all")
      .then(async (res) => {
        const parsed = await res.json()
        console.log(parsed)
        setBlogPosts(parsed.articles);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {/* Render Posts */}
        {blogPosts?.map((item, index) => (
          <Post props={item} key={index} />
        ))}
      </section>
    </>
  )
}
