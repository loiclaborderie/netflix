import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";
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

  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="En tendances" data={movies} />
      </div>
    </>
  );
};

export default Home;
