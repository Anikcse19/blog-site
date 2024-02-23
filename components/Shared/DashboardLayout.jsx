import { NavContext } from "@/ContextApi/NavContext/NavContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSidebarMobile from "./DashboardSidebarMobile";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { isMobileNavOpen, setIsMobileNavOpen } = useContext(NavContext);

  // console.log(isMobileNavOpen);
  return (
    <div className="flex  ">
      {/* sidebar */}
      <DashboardSidebar />

      {isMobileNavOpen && (
        <div className="w-full">
          <DashboardSidebarMobile />
        </div>
      )}
      {/* children */}
      <div className="flex-grow flex flex-col w-full">
        {/* children upper part start */}
        <div className="bg-slate-900 text-white flex justify-between items-center py-6 px-5">
          <div className="text-white font-bold flex items-center  gap-3">
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
              <img src="https://i.ibb.co/rpQczPG/male.jpg" alt="" />
            </div>
            <div>
              <span>Mr. Anik</span>
            </div>
          </div>
          <div
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="block md:hidden"
          >
            <CiMenuFries />
          </div>
        </div>
        {/* children upper part end */}
        <div className="px-5 md:px-12 py-12 md:py-12 flex-grow bg-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
