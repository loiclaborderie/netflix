import BillBoard from "@/components/BillBoard";
import Navbar from "@/components/Navbar";
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
  return (
    <>
      <Navbar />
      <BillBoard />
    </>
  );
};

export default Home;
