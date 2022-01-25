import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/fetch";
import Post from "../components/Post";
import { GetStaticProps } from "next";
import { POST } from "../../types/Types";

type STATICPROPS = {
  posts: POST[];
};

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl">blog page</p>
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
    </Layout>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
