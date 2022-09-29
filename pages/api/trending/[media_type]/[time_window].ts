import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { PopularAndTrendingResult } from "../../../../types";
import axiosClient from "../../../../utils/axiosClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PopularAndTrendingResult | string>) {
  const { media_type, time_window } = req.query;

  if (req.method === "GET") {
    if (media_type && time_window) {
      if (
        (media_type === "tv" || media_type === "all" || media_type === "movie") &&
        (time_window === "day" || time_window === "week")
      ) {
        try {
          const axiosResponse = await axiosClient.get(`/trending/${media_type}/${time_window}`);
          const data: PopularAndTrendingResult = await axiosResponse.data;

          res.status(200).json(data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            res.status(401).send(error.message);
          } else {
            throw new Error("unknown error");
          }
        }
      } else {
        return res
          .status(402)
          .json("invalid query param, it should be the the following: '/trending/{media_type}/{time_window}'");
      }
    } else {
      return res.status(402).json("require both media_type and time_period params");
    }
  } else {
    return res.status(401).json("Only GET request allowed");
  }
}
