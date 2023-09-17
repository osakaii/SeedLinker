import api from "api";

export type FranchisePreviewItem = {
  id: number;
  name: string;
  description: string;
  invest_price_from: number;
  invest_price_to: number;
  images: string[];
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

export const getFranchise = async (id: string) => {
  console.log(id);
  const response = await api.get<FranchisePreviewItem>(`franchise/franchise/${id}`);
  return response.data;
};
