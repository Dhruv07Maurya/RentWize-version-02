import React from "react";
import Navbar from "../components/Navbar";

function NoPage() {
  return (
    <>
      <Navbar />
      <center><h1 className="text-3xl text-red-700">Please login with admin Credentials</h1></center>
      <div className="bg-gray-100 min-h-screen pl-60 pt-12">
        <img
          src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
          alt=""
        />
      </div>
    </>
  );
}

export default NoPage;
