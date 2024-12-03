import Hade from "./MiniComponents/Hade";
import Dash from "./MiniComponents/Dash";
import Revenue from "./MiniComponents/Revenue";
import DualLineChart from "./Charts/DualLineChart";
import InvoiceComp from "./MiniComponents/InvoiceComp";
import TopProducts from "./MiniComponents/TopProducts";
import TopSalesCategory from "./MiniComponents/TopSalesCategory";
import AllOrder from "./MiniComponents/AllOrder";
import WarehouseManagement from "./MiniComponents/WarehouseManagement";

const MainContent = () => {
  return (
    <div className="overflow-y-auto py-5">
      {/* Header Section */}
      <div className="px-5 mobile">
        <Hade />
        <Dash />
      </div>
      <div className="mobile p-5 flex 2xl:flex-row xl:flex-row sm:flex-wrap md:flex-wrap gap-5">
        <Revenue />
        <div className="lg:w-[63%] w-full bg-white shadow-xl py-6">
          <DualLineChart />
        </div>
      </div>
      <div className="px-5 mobile flex flex-wrap gap-5 justify-center">
        <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[31%] ">
          <InvoiceComp />
        </div>
        <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[31%] ">
          <TopProducts />
        </div>
        <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[31%]">
          <TopSalesCategory />
        </div>
      </div>
      {/* All Orders and Warehouse Management Section */}
      <div
        id="allorder-card"
        className=" mobile w-full pt-5 flex px-5 gap-5 sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap 2xl:flex-nowrap"
      >
        <div className="w-full lg:w-[100%]">
          <AllOrder />
        </div>
        <div id="last-card" className="w-full lg:w-[100%]">
          <WarehouseManagement />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
