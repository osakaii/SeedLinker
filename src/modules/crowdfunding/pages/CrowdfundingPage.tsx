import CardComponent from "components/CardComponent";
import {AppRoutePath} from "router/types";
import {useQuery} from "react-query";
import {getFranchises} from "api/franchiseApi";

const franchises = [
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},

    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
    {name: "Digital Bike", description: "Happy", invest_price_from: "5000", invest_price_to: "12000"},
    {name: "Macbook 40", description: "MAC", invest_price_from: "500000", invest_price_to: "1200000"},
];

const CrowdfundingPage = () => {
    const {data} = useQuery("franchises", getFranchises);

    console.log(data);
    return (
        <>
            <div className="w-55">Filters</div>
            <div
                className="mt-12 bg-white mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                {franchises?.map(({name, description, invest_price_from, invest_price_to}, index) => (
                    <CardComponent
                        post={{
                            imageUrl:
                                "https://allo.tochka.com/storage/app/media/articles/2021/Prodazha_bisnesa/1114x596_prodaja_cropped.png",
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
export default CrowdfundingPage;
