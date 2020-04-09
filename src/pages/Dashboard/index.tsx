import React, { useEffect } from "react";
import { store as appStore } from "ice";
import routerConfig from "@/routes";

const Dashboard = () => {
  const [counterState, counterActions] = appStore.useModel("app");
  useEffect(() => {
    counterActions.setRouterList(
      routerConfig[0].children.filter((item) => item.path === "/about")
    );
  }, []);
  return (
    <>
      <h2>Dashboard Page...</h2>
    </>
  );
};

export default Dashboard;
