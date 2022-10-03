import type { NextApiRequest, NextApiResponse } from "next";
import { MovieDetails } from "../../../../types/MovieDetails";
import { TvCastCredit, Keywords } from "../../../../types/TvShowDetails";
import axiosClient from "../../../../utils/axiosClient";

type Data = {
  details: MovieDetails;
  creditsCast: TvCastCredit;
  keywords: Keywords;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { movie_id } = req.query;

  const { data: details } = await axiosClient.get(`/movie/${movie_id}`);
  const { data: creditsCast } = await axiosClient.get(`/movie/${movie_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/movie/${movie_id}/keywords`);

  res.status(200).json({ details, creditsCast, keywords });
}
