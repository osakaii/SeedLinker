import CardComponent from "components/CardComponent";
import { AppRoutePath } from "router/types";
import { useQuery } from "react-query";
import { FranchiseList, getFranchises } from "api/franchiseApi";
import LoadPage from "components/LoadPage";
import FranchiseFilters from "../components/FranchiseFilters";

const FranchisesPage = () => {
  const { data, isLoading } = useQuery<FranchiseList>(
    "franchises",
    getFranchises
  );

  if (isLoading) return <LoadPage />;
  return (
    <div className="mt-4">
      <FranchiseFilters>
        <div className="bg-white mx-auto max-w-md px-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="mb-6 hidden lg:block">
            <h2 className="text-4xl">Franchise showcase</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {data?.results?.map(
              ({
                name,
                description,
                invest_price_from,
                invest_price_to,
                id,
              }) => (
                <CardComponent
                  key={id}
                  post={{
                    imageUrl:
                      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
                    id,
                    href: AppRoutePath.Franchises + "/" + id,
                    title: name,
                    subtitle: description,
                    preview: description,
                    prices: `$${invest_price_from}-${invest_price_to}`,
                  }}
                />
              )
            )}
          </div>
        </div>
      </FranchiseFilters>
    </div>
  );
};
export default FranchisesPage;
