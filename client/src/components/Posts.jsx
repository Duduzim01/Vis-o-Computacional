import React, { useState } from 'react'

import Thumbnail1 from '../images/cameras-com-infra-vermelho-na-zona-sul.jpg'
import Thumbnail2 from '../images/cameras-com-infra-vermelho-na-zona-sul.jpg'
import Thumbnail3 from '../images/cameras-com-infra-vermelho-na-zona-sul.jpg'
import Thumbnail4 from '../images/cameras-com-infra-vermelho-na-zona-sul.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
  
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: "education",
    title: "Some post on the page",
    desc: "Some description for the post.",
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category: "science",
    title: "Some post on the page",
    desc: "Some description for the post.",
    authorID: 1
  },
  {
    id: '3',
    thumbnail: Thumbnail3,
    category: "weather",
    title: "Some post on the page",
    desc: "Some description for the post.",
    authorID: 13
  },
  {
    id: '4',
    thumbnail: Thumbnail4,
    category: "farming",
    title: "Some post on the page",
    desc: "Some description for the post.",
    authorID: 11
  },
]


export const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (

    <section className='posts'>
      <div className="posts__container">
      {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title = {title} description={desc} authorID={authorID}/>)
      }
      </div>
    </section>  
  )
}

export default Posts