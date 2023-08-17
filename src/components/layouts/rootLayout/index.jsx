"use client";
import React, { useState } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import SmallScreenSideBar from "./smallScreenSideBar";
const RootLayout = ({ children }) => {
  const [isSider, setIsSideBar] = useState(false);

  return (
    <>
      <NavBar isSidebar={isSider} setIsSideBar={setIsSideBar} />
      <SmallScreenSideBar showSideBar={isSider} setIsSideBar={setIsSideBar} />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
