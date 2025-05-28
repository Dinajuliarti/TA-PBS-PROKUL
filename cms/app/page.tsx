// import SideBar from "@/components/sidebar/SideBar";
import LineChart from "@/components/chart/LineChart";
import StatsChart from "@/components/chart/StatsChart";
import RecentOrders from "@/components/orders/RecentOrders";
import SignInForm from "@/components/UI/form/SignInForm";

export default function Home() {
  return (
    <>
      <div className="px-20 py-5">
        <StatsChart />
      </div>
      <div className="px-20 py-5">
        <LineChart />
      </div>
      <div className="px-20 py-5 ">
        <RecentOrders />
      </div>
      {/* <div className="px-20 py-5">
        <SignInForm />
      </div> */}
    </>
  );
}
