import { server } from "../common/config";
import { FilterType } from "../types/index";

export default class JobsService {
  static async getJobs() {
    try {
      const res = await server.get("/jobs");
      return res.data;
    } catch (e) {
      console.error(e);
      return e.message;
    }
  }
  static async getFilters() {
    try {
      const res = await server.get("/filters");
      return res.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static async searchJob(
    val?: string,
    filters?: FilterType[]
  ): Promise<any[]> {
    try {
      const res = await server.get("/jobs", {
        params: {
          q: val || "",
          filters: filters || [],
        },
      });
      return res.data.jobs;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}
