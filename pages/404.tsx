import { useRouter } from "next/router";
import React from "react";
import Button from "../components/Button/index";

const NotFound = () => {
  const { replace } = useRouter();
  const onReload = () => {
    replace("/");
  };
  return (
    <div className="p-20 flex justify-center flex-col items-center space-y-5 bg-white my-5">
      An Error occurred. Failed to fetch data. Please reload to
      try again.....
      <br />
      <Button onClick={onReload}>Reload</Button>
    </div>
  );
};

export default NotFound;
