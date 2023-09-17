import CardComponent from "components/CardComponent";
import { AppRoutePath } from "router/types";

const franchises = [
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
  { name: "title", description: "1frewf", invest_price_from: "123", invest_price_to: "123" },
];

const FranchisesPage = () => {
  return (
    <>
    <div className="w-55">
      Filters
    </div>
      <div className="mt-12 bg-white mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        {franchises?.map(({ name, description, invest_price_from, invest_price_to }, index) => (
          <CardComponent
            post={{
              imageUrl:
                "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
              id: index,
              href: AppRoutePath.FranchisePage,
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
