import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";

export function PostCard(post: Post) {
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
        <time className="flex items-center" dateTime={post.date}>
          <AiOutlineCalendar className="mr-1" />{" "}
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
