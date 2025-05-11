import React from 'react'

type Post = {
  id: number
  image: string
  title: string
  description: string
}

const posts: Post[] = [
  { id: 1, image: 'images/post1.svg', title: 'Lorem', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: 2, image: 'images/post2.svg', title: 'Lorem', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: 3, image: 'images/post3.svg', title: 'Lorem', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: 4, image: 'images/post2.svg', title: 'Lorem', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },

]

const PostCard = ({ post }: { post: Post }) => (
  <div className="border-2 flex flex-col space-y-2 items-center justify-center border-dashed border-gray-300 rounded-lg p-4 text-center">
    <img src={post.image} alt={post.title} className="w-full" />
    <h4 className="font-semibold mt-2">{post.title}</h4>
    <span className="text-sm text-gray-600">{post.description}</span>
    <button className='bg-black w-1/2 text-white text-xs  p-1.5 uppercase '>Read More</button>
  </div>
)

const Posts = () => {
  return (
    <div className="container mx-auto m-4">
      <h2 className="flex justify-center items-center m-8 font-extrabold italic text-2xl">POPULAR POST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
