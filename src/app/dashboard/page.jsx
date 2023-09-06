import React from "react";
import AppNavBar from "../component/AppNavBar";

const page = () => {


  return (
    <div>
      <main className="">
          <AppNavBar />
        <div className="space-x-5 w-full items-center justify-between font-mono text-sm lg:flex border">
          <h1>Welcome to Dashboard.</h1>
        </div>
      </main>
    </div>
  );
};

export default page;
