// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { PopularResult } from "../../../types";
import axiosClient from "../../../utils/axiosClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse<PopularResult | string>) {
  if (req.method === "GET") {
    try {
      const axiosResponse = await axiosClient.get(`/tv/popular`);
      const data: PopularResult = await axiosResponse.data;
      const result = data;
      res.status(200).json(result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        res.status(401).send(error.message);
      } else {
        throw new Error("unknown error");
      }
    }
  }
}
