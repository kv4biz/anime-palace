import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";
async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="text-3xl text-white font-bold">Explore Anime</div>
        <div className="text-3xl text-white font-bold">By Popularity</div>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
