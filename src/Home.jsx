import React, { useState } from 'react';
const Home = () => {
    const [blogs, setBlogs]= useState([
        {title: 'testing 1' , body: 'hello world...',author: 'aryan', id:1 },
        {title: 'testing 2' , body: 'namaste world...',author: 'raj', id:2 },
        {title: 'testing 3' , body: 'hellooo...',author: 'singh', id:3 }
    ])
   
  return (
    <div>
        <h1>Homepage</h1>
        {blogs.map((blog) => (
            <div className="blog-preview" key ={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.authoor} </p>
            </div>
        ))}
    </div>
  )
}

export default Home