import React, { useEffect } from "react";
import { useRequest } from "ice";

export default function Home(props) {
  const { data, loading, error, request } = useRequest({
    url: "/api/projects",
    method: "GET"
  });
  useEffect(() => {
    request();
  }, []);
  return (
    <>
      <h2>Home Page...</h2>
      <p>3秒后跳转到about页面，注意hash变化</p>
    </>
  );
}

Home.pageConfig = {
  title: "Home Page"
};
