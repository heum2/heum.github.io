import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { ASide, Footer } from "src/components/layout";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex mb-2 text-xs text-gray-600">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "yy.MM.d")}{" "}
        </time>
        <time className="ml-2" dateTime={post.readingTime.minutes}>
          {Math.ceil(post.readingTime.minutes)}분
        </time>
      </div>
      <p>{post.description}</p>
      <ul>
        {post.tags.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
    </div>
  );
}

function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <ASide>hi</ASide>

      <div className="col-span-12 lg:col-span-7">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <ASide>
        <Footer />
      </ASide>
    </div>
  );
}

export default Home;
