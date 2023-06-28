import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import { ASide, Footer } from "src/components/layout";
import { ContractCard, ProfileCard, PostCard } from "src/components/cards";
import { Tag } from "src/components/tags";
import { useMemo } from "react";

function Home() {
  const { posts, tags } = useMemo(
    () => ({
      posts: allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
      ),
      tags: Array.from(new Set(allPosts.flatMap(item => item.tags))),
    }),
    []
  );

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <ASide className="col-span-2">
        <div>
          <div className="p-1 mb-3 font-bold">🏷️ Tags</div>
          <ul className="gap-1 flex mobile-x-scroll lg:block mb-6">
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </ul>
        </div>
      </ASide>

      <div className="col-span-12 lg:col-span-7">
        <div>
          <div className="p-1 mb-3 font-bold">🏷️ Tags</div>
        </div>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>

      <ASide className="col-span-3">
        <ProfileCard />
        <ContractCard />
        <Footer />
      </ASide>
    </div>
  );
}

export default Home;
