"use client";

import "../globals.css";
import Toggle from "../ui/Toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  const [showToggle, setShowToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token)
    if (pathname === "/") {
      setShowToggle(true);
    }
  }, [pathname]);

  return (
    <>
      {showToggle ? <Toggle /> : null}
      {children}
    </>
  );
}
