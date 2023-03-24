import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="En tendances" data={movies} />
        <MovieList title="Ma liste" data={favorites} />
      </div>
    </>
  );
};

export default Home;
