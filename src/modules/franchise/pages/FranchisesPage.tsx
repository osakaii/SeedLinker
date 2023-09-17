import CardComponent from "components/CardComponent";
import { AppRoutePath } from "router/types";
import { useQuery } from "react-query";
import { FranchiseList, getFranchises } from "api/franchiseApi";

const FranchisesPage = () => {
  const { data } = useQuery<FranchiseList>("franchises", getFranchises);

  return (
    <>
      <div className="w-55">Filters</div>
      <div className="mt-12 bg-white mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        {data?.results?.map(({ name, description, invest_price_from, invest_price_to, id }) => (
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
        ))}
      </div>
    </>
  );
};
export default FranchisesPage;
