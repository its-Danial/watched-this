// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { PopularResult } from "../../../types";
import axiosClient from "../../../utils/axiosClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PopularResult | string>) {
  if (req.method === "GET") {
    try {
      const axiosResponse = await axiosClient.get(`/movie/popular`);
      const data: PopularResult = await axiosResponse.data;

      res.status(200).json(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        res.status(401).send(error.message);
      } else {
        throw new Error("unknown error");
      }
    }
  }
}
