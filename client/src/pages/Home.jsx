import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const posts = [
        {   
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://cdn.dribbble.com/userupload/3963285/file/original-452b5b19a31c170bcfd97b5797fda22e.png?compress=1&resize=752x",
      },
      {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://cdn.dribbble.com/userupload/4456172/file/original-849a5ee171627bc15f666d477cdc0dad.png?compress=1&resize=752x",
      },
      {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://cdn.dribbble.com/userupload/4456053/file/original-5fc86551d33b2738aaaf7b13c31ff7b7.jpg?compress=1&resize=752x",
      },
      {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://cdn.dribbble.com/userupload/4452398/file/original-256efd43dd2cdebfd3074e4793b0ad2e.png?compress=1&resize=752x",
       },
     ];
    
    return (
       <div className='home'>
           <div className='posts'>
               {posts.map(post => (
                   <div className='post' key={post.id}>
                       <div className='img'>
                           <img src={post.img} alt="" />
                       </div>
                       <div className="content">
                           <Link className="link" to={`/post/${post.id}`}>
                               <h1>{post.title}</h1>
                            </Link>
                               <p>{post.desc}</p>
                               <button>Read More</button>
                       </div>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default Home