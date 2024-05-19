import React from 'react';
import Navbar from "@/components/nav-bar";

function Layout({children}: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar/>
      {children}
    </div>
  );
}

export default Layout;
