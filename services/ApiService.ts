import { FilterKeys } from "../types/index";
import _ from "lodash";

export default class ApiService {
  static getJobByText(data: any[], text: string): null | any[] {
    try {
      let result: any = [];
      const searchString = this.stripString(text);
      data.forEach((d) => {
        let textString = `${d.name}${d.job_title}`;
        d.items.forEach((itm: any) => {
          itm.department.forEach((dep: string) => {
            textString = `${textString}${dep}`;
          });
          textString = `${textString}${itm.experience || ""}${
            itm.job_title || ""
          }${itm.job_type || ""}${itm.work_schedule || ""}`;
        });
        textString = this.stripString(textString);
        if (
          textString.indexOf(searchString.toLowerCase()) > -1
        ) {
          result.push(d);
        }
      });
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  static stripString(text: string) {
    return text
      .toLowerCase()
      .split(" ")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join()
      .split(",")
      .join("");
  }

  static sortJobsByFilters(data: any, filters: FilterKeys[]) {
    try {
      console.log("DDD", data);
      const result: any = null;
      filters.forEach((key) => {
        if (key === "Department") {
          // data.forEach((d) => {});
        }
      });
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
