import api from "api";

export type FranchisePreview = {
  name: string;
  description: string;
  invest_price_from: number;
  invest_price_to: number;
};

export const getFranchises = async () => {
  const response = await api.get<FranchisePreview[]>("franchise/franchise/");
  return response.data;
};
