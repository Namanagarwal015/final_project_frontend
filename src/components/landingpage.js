import React from 'react';
import Card from './card';
import '../styles/card.css';
import Header from './Header';
import Blog from './Blog';
// import Dropdown from './Dropdown';

const Landingpage=({Blogs})=> {
    // <------------------------------Cards------------------------------->
    const BlogsCard = Blogs.map(blog => {
        return (
          <Card
            title={blog.Title}
            img={blog.Poster}
            category={blog.category}
            author={blog.author}
            update={blog.update}
            id={blog.id}
          />
        )
      })
    
 // <---------------------------------Cards-------------------------------->

    return (<><Header/>
    <Blog/>
        {/* {/* <div className='moviesContainer'>
        {BlogsCard}
      </div> */}
      </>
    );
  }
  

export default Landingpage; 