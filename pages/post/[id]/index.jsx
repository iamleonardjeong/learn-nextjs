// import { useRouter, userRouter } from 'next/router';
// import Link from 'next/link';
// import Header from '../../../components/Header';
import Head from 'next/head';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </>
  );
}

/* const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
}; */

// export default Post;
