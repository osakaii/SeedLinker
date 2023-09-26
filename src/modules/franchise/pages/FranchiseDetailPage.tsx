import Container from "components/layout/Container";
import DetailSwiper from "../components/DetailSwiper";
import FranchiseInformation from "../components/FranchiseInformation";
import ProjectPlan from "../components/ProjectPlan";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFranchise } from "api/franchiseApi";
import parse from "html-react-parser";
import LoadPage from "components/LoadPage";

// const slides = [
//   {
//     image:
//       "https://img.itinari.com/pages/images/original/22513d86-8d9f-4313-ae2a-80421150ae81-whatsapp-image-2018-05-25-at-12-26-58.jpeg?ch=DPR&dpr=2.625&w=1600&s=89011f8cae8f013e51d468bd39964bc7",
//   },
//   {
//     image: "https://economist.kg/content/images/wp-content/uploads/2022/09/1925291_691802637545809_351596424_n.jpg",
//   },
// ];

const plans = [
  {
    name: "Business Plan",
  },
  {
    name: "Marketing Plan",
  },
];

const FranchiseDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery("detailFranchise", () =>
    getFranchise(id || "")
  );

  const slides = data?.images.map((image) => ({
    image,
  }));

  if (isLoading) return <LoadPage />;
  return (
    <div>
      <Container>
        {data ? (
          <>
            <h1 className="text-3xl font-semibold">Shoro franchize</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="">
                <DetailSwiper slides={slides} />
              </div>
              <div className="flex flex-col gap-y-4">
              <div>
                  <FranchiseInformation
                    yearOfEstablishment={1992}
                    franchiseEnterprises={11}
                    monthlyTurnover={0}
                    numberOfEmployees={900}
                  />
                </div>
                <div className="">
                  <ProjectPlan plans={plans} />
                </div>
              </div>
              <div className="md:col-span-2">
                {parse(data?.description || "")}
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-3xl font-semibold">No such franchise</h1>
        )}
      </Container>
    </div>
  );
};

export default FranchiseDetailPage;
