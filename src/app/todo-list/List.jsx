import SidebarComponent from "@/components/SidebarComponent";
import NavbarComponent from "@/components/NavbarComponent";

import React from "react";

export default function List() {
  return (
      <main className="grid grid-flow-col">
          <SidebarComponent/>
          <NavbarComponent/>
      </main>
  );
}
