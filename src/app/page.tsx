import StatsCards from "@/components/main-dashboard/StatsCards/StatsCards";
import Charts from "@/components/main-dashboard/charts/Charts";

const Dashboard = () => {
  return (
    <>
      <section className="flex-1 p-4 lg:p-6">
        <StatsCards />
        <Charts />
      </section>
    </>
  );
};

export default Dashboard;
