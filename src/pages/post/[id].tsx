// import { GetStaticPaths, GetStaticProps } from 'next';


// interface PostProps {
//   post: { id: string; title: string; content: string };
// }

// const Post = ({ post }: PostProps) => {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await getAllPostIds(); // Retrieve a list of IDs for dynamic routes
//   return {
//     paths,
//     fallback: false, // or 'blocking' or true
//   };
// };

// export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
//   const post = await getPostById(params?.id as string); // Fetch post data by ID
//   return {
//     props: {
//       post,
//     },
//   };
// };

// export default Post;
