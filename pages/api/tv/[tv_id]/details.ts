import type { NextApiRequest, NextApiResponse } from "next";
import { CastCredit, Keywords, TvShowDetails } from "../../../../types/TvShowDetails";
import axiosClient from "../../../../utils/axiosClient";

type Data = {
  details: TvShowDetails;
  creditsCast: CastCredit;
  keywords: Keywords;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { tv_id } = req.query;

  const { data: details } = await axiosClient.get(`/tv/${tv_id}`);
  const { data: creditsCast } = await axiosClient.get(`/tv/${tv_id}/credits`);
  const { data: keywords } = await axiosClient.get(`/tv/${tv_id}/keywords`);

  res.status(200).json({ details, creditsCast, keywords });
}
