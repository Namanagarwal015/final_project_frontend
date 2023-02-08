import React from 'react'
import BlogCard from './BlogCard'
import Carousel from './Crousel'
import Cta from './Cta'
import Header from './Header'
import Newsletter from './Newsletter'
import Pagination from './Pagination'
import Pay from './Pay'
import '../styles/landingpage.css'
import Navbar2 from './Navbar2'
import { useParams } from 'react-router-dom'
import Blognavbar from './blognavbar'

function Blog2({Blogs}) {

  //console.log(Blogs);
  const name=useParams();
    const BlogsCard = Blogs.map(blog => {
        return (<div class='mx-8 my-4 '>
          <BlogCard
            title={blog.title}
            img={blog.Poster}
            category={blog.category}
            author={blog.author}
            update={blog.update}
            id={blog.id}
            content={blog.content}
          /></div>
        )
      })


  return (
<>
<Blognavbar name={name}/>
<Newsletter/>

<div className='flex flex-row flex-wrap justify-center items-center bg-[#F9FAFB]'>{BlogsCard}</div>
<Pagination/>
<Pay/>
<Carousel/>

<Cta/>




</>
  )
}

export default Blog2