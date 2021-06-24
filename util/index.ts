import _ from "lodash";

export const sortParentByKeyAndNestedItem = (
  data: any,
  key: string,
  order: "asc" | "desc"
) => {
  const result = _.orderBy(data, [(o: any) => o[key]], [order]);
  const newResult = result.map((r: any) => {
    const newItems = _.orderBy(r.items, (o: any) => o[key], [
      order,
    ]);
    return { ...r, items: newItems };
  });
  return newResult;
};

export const sortParentByItemsKey = (
  data: any,
  key: string,
  order: "asc" | "desc"
) => {
  return _.orderBy(data, (o: any) => o.items[0][key], [order]);
};

export const sortByNestedItemsKey = (
  data: any,
  key: string,
  order: "asc" | "desc"
) => {
  const newResult = data.map((r: any) => {
    const newItems = _.orderBy(r.items, (o: any) => o[key], [
      order,
    ]);
    return { ...r, items: newItems };
  });
  return newResult;
};

export const getCityInitials = (data: any) => {
  return data.items[0].city.substr(0, 2).toUpperCase();
};

export const getItems = (data: any[]) => {
  return data.map((d) => ({
    item: d.key,
    count: d.doc_count,
  }));
};
export const countJobs = (jobsData: any) => {
  let count = 0;
  jobsData &&
    jobsData.forEach((j: any) => {
      count += j.total_jobs_in_hospital;
    });
  return count;
};
export const getCardTitle = (title: string) => {
  if (title === "job_type") return "Job Type";
  if (title === "work_schedule") return "Work Schedule";
  return title;
};
