const examplePosts = [
  {
    id: 1,
    content: "lorem ipsum",
  },
  {
    id: 2,
    content: "test post ",
  },
];
export default function Posts() {
  return examplePosts.map(post => {<div>{post.content}</div>});
}
