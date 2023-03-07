import PageCards from "./page/cards/PageCards";
import PageDetails from "./page/details/PageDetails";
import PageStats from "./page/stats/PageStats";

const MainSection = () => {
  return (
    <div className="main">
      <PageStats />
      <PageCards />
      <PageDetails />
    </div>
  );
};

export default MainSection;
