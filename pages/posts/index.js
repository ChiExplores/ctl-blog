import BasicCard from "../../components/BasicCard";

const Posts = ({ posts }) => {
  // console.log(`Posts,${JSON.stringify(posts)}`)

  return(
    <BasicCard title={posts.content}>asdf</BasicCard>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default Posts;
