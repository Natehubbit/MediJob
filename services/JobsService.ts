import { server } from "../common/config";

export default class JobsService {
  static async getJobs() {
    try {
      const res = await server.get("/jobs");
      return res.data;
    } catch (e) {
      console.error(e);
      return null;
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
}
