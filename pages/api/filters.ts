// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Request, Response } from "express";
import filters from "../../data/filters.json";

export default (_: Request, res: Response) => {
  res.statusCode = 200;
  res.json(filters);
};
