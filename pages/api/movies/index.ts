import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";
import { Movie } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req);

    const movies: Movie[] = await prismadb.movie.findMany();
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
