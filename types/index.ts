import { SORT_KEYS } from "../common/constants";
export type FilterKeys = typeof SORT_KEYS[number];
export interface FilterType {
  [key: string]: "asc" | "desc";
}
