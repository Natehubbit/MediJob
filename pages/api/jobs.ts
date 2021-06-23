import { Request, Response } from "express";
import jobs from "../../data/jobs.json";
import ApiService from "../../services/ApiService";
import { FilterKeys } from "../../types/index";

export default async (req: Request, res: Response) => {
  try {
    res.statusCode = 200;
    // @todo: implement filters and search
    // @todo: implement automated tests
    let result = undefined;

    const { query } = req;
    if (query?.q) {
      result = ApiService.getJobByText(jobs, query.q as string);
    }
    if ((query?.["filters[]"] as FilterKeys[])?.length > 0) {
      let filters = query?.["filters[]"] as any;
      if (typeof filters === "string") {
        filters = [filters];
      }
      const data = ApiService.sortJobsByFilters(
        result || jobs,
        filters
      );
      if (data) {
        result = data;
      }
    }

    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 * Math.random())
    );

    return res.json({ jobs: result || jobs });
  } catch (e) {
    return res.status(500).end();
  }
};
