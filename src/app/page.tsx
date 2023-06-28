import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import { ASide, Footer } from "src/components/layout";
import { ContractCard, ProfileCard, PostCard } from "src/components/cards";

function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <ASide className="col-span-2">
        <div>
          <div className="p-1 mb-3">🏷️ Tags</div>
          <ul className="gap-1 flex mobile-x-scroll lg:block mb-6">
            {allPosts
              .flatMap(item => item.tags)
              .map(tag => (
                <li
                  key={tag}
                  className="cursor-pointer text-sm p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
                >
                  <a>{tag}</a>
                </li>
              ))}
          </ul>
        </div>
      </ASide>

      <div className="col-span-12 lg:col-span-7">
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
