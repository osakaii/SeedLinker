import api from "api";

export type FranchisePreviewItem = {
  name: string;
  description: string;
  invest_price_from: number;
  invest_price_to: number;
};

export type FranchiseList = {
  count: number;
  next: string;
  previous: string;
  results: FranchisePreviewItem[];
};

export const getFranchises = async () => {
  const response = await api.get<FranchiseList>("franchise/franchise/");
  return response.data;
};
