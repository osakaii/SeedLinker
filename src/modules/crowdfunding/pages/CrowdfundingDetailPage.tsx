import Container from "components/layout/Container";
import DetailSwiper from "../components/DetailSwiper";
import CrowdfundingInformation from "../components/CrowdfundingInformation.tsx";
import ProjectPlan from "../components/ProjectPlan";

const slides = [
  {
    image:
      "https://img.itinari.com/pages/images/original/22513d86-8d9f-4313-ae2a-80421150ae81-whatsapp-image-2018-05-25-at-12-26-58.jpeg?ch=DPR&dpr=2.625&w=1600&s=89011f8cae8f013e51d468bd39964bc7",
  },
  {
    image: "https://economist.kg/content/images/wp-content/uploads/2022/09/1925291_691802637545809_351596424_n.jpg",
  },
];

const plans = [
  {
    name: "Business Plan",
  },
  {
    name: "Marketing Plan",
  },
];

const CrowdfundingDetailPage = () => {
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-semibold">Shoro franchize</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <DetailSwiper slides={slides} />
          </div>
          <div>
            <CrowdfundingInformation yearOfEstablishment={1992} franchiseEnterprises={11} monthlyTurnover={0} numberOfEmployees={900} />
          </div>
          <div>
            <p>
              CJSC "Shoro" was founded in 1992 and today is one of the dynamically developing companies in the Kyrgyz Republic. For more than 25 years
              "Shoro" has been a leader in the Kyrgyz market for production and realization of national drinks, spring and mineral waters, as well as
              sour-milk food products and snack products. Company "Shoro" offers you to consider the possibility of mutually beneficial cooperation.
              The range of products manufactured by our company includes: Spring and mineral waters: Tien-Shan Legend (Legend) Baytik Issyk-Ata
              (Issyk-Ata) National drinks: ....
            </p>
          </div>
          <div className="">
            <ProjectPlan plans={plans} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CrowdfundingDetailPage;
