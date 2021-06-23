import _ from "lodash";
import { createMocks } from "node-mocks-http";
import jobsHandler from "../pages/api/jobs";
import { FilterKeys } from "../types/index";
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
  it("should sort results by department", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": "Department" as FilterKeys,
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortByNestedItemsKey(data, "department");
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by location", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": "Location" as FilterKeys,
      },
    });
    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortParentByKeyAndNestedItem(data, "city");
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by role", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": "Role" as FilterKeys,
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    const sorted = sortParentByKeyAndNestedItem(
      data,
      "job_title"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by all filters", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        "filters[]": [
          "Location",
          "Role",
          "Experience",
          "Department",
          "Education",
        ] as FilterKeys[],
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    let sorted = sortParentByItemsKey(data, "city");
    sorted = sortParentByKeyAndNestedItem(sorted, "job_title");
    sorted = sortByNestedItemsKey(sorted, "experience");
    sorted = sortByNestedItemsKey(sorted, "department");
    sorted = sortByNestedItemsKey(
      sorted,
      "required_credentials"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });

  it("should sort results by all filters and search string", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        q: "Medicine",
        "filters[]": [
          "Location",
          "Role",
          "Experience",
          "Department",
          "Education",
        ] as FilterKeys[],
      },
    });

    await jobsHandler(req, res);
    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData()).jobs;
    let sorted = sortParentByItemsKey(data, "city");
    sorted = sortParentByKeyAndNestedItem(sorted, "job_title");
    sorted = sortByNestedItemsKey(sorted, "experience");
    sorted = sortByNestedItemsKey(sorted, "department");
    sorted = sortByNestedItemsKey(
      sorted,
      "required_credentials"
    );
    expect(data).toBeTruthy();
    expect(data).toEqual(sorted);
  });
});
