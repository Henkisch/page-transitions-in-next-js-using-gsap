import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-1 justify-center items-center px-6">
      {children}
    </main>
  )
}

export default Layout;
