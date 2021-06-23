import { FilterKeys } from "../types/index";
import _ from "lodash";
import {
  sortByNestedItemsKey,
  sortParentByItemsKey,
  sortParentByKeyAndNestedItem,
} from "../util/index";

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
      let result: any = data;
      filters &&
        filters.forEach((key) => {
          if (key === "Location") {
            result = sortParentByItemsKey(result, "city");
          }
          if (key === "Role") {
            result = sortParentByKeyAndNestedItem(
              result,
              "job_title"
            );
          }
          if (key === "Experience") {
            result = sortByNestedItemsKey(result, "experience");
          }
          if (key === "Department") {
            result = sortByNestedItemsKey(result, "department");
          }
          if (key === "Education") {
            result = sortByNestedItemsKey(
              result,
              "required_credentials"
            );
          }
        });
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
