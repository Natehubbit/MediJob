import _ from "lodash";
import { createMocks } from "node-mocks-http";
import jobsHandler from "../pages/api/jobs";
import {
  sortParentByKeyAndNestedItem,
  sortParentByItemsKey,
  sortByNestedItemsKey,
} from "../util/index";

describe("String search endpoint parameters", () => {
  it("should fetch all jobs succeccfully", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(1);
  });

  it("should fetch results based on city search string", async () => {
    const { req, res } = createMocks({
      method: "GET",
      params: {
        q: "Mammoth Lakes, CA",
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(1);
  });

  it("should fetch results based on job title search string", async () => {
    const { req, res } = createMocks({
      method: "GET",
      params: {
        q: "General Nurse",
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(1);
  });

  it("should fetch results based on department title search string", async () => {
    const { req, res } = createMocks({
      method: "GET",
      params: {
        q: "Medicine",
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(1);
  });
});

describe("Search job by sort parameters", () => {
  it("should sort results by department in ascending", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": JSON.stringify({ Department: "asc" }),
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortByNestedItemsKey(
      data,
      "department",
      "asc"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by location in ascending order", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": JSON.stringify({ Location: "asc" }),
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortParentByKeyAndNestedItem(
      data,
      "city",
      "asc"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by role in desc", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": JSON.stringify({ Role: "desc" }),
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortParentByKeyAndNestedItem(
      data,
      "job_title",
      "desc"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by all filters in ascending order", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": [
          JSON.stringify({ Location: "asc" }),
          JSON.stringify({ Role: "asc" }),
          JSON.stringify({ Experience: "asc" }),
          JSON.stringify({ Department: "asc" }),
          JSON.stringify({ Education: "asc" }),
        ] as string[],
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    let sorted = sortParentByItemsKey(data, "city", "asc");
    sorted = sortParentByKeyAndNestedItem(
      sorted,
      "job_title",
      "asc"
    );
    sorted = sortByNestedItemsKey(sorted, "experience", "asc");
    sorted = sortByNestedItemsKey(sorted, "department", "asc");
    sorted = sortByNestedItemsKey(
      sorted,
      "required_credentials",
      "asc"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by all filters and search string in descending order", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        q: "Medicine",
        "filters[]": [
          JSON.stringify({ Location: "desc" }),
          JSON.stringify({ Role: "desc" }),
          JSON.stringify({ Experience: "desc" }),
          JSON.stringify({ Department: "desc" }),
          JSON.stringify({ Education: "desc" }),
        ] as string[],
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    let sorted = sortParentByItemsKey(data, "city", "desc");
    sorted = sortParentByKeyAndNestedItem(
      sorted,
      "job_title",
      "desc"
    );
    sorted = sortByNestedItemsKey(sorted, "experience", "desc");
    sorted = sortByNestedItemsKey(sorted, "department", "desc");
    sorted = sortByNestedItemsKey(
      sorted,
      "required_credentials",
      "desc"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });
});
