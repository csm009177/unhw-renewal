"use client";

import "../globals.css";
import Toggle from "../ui/Toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProps) {
  const [showToggle, setShowToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token)
    if (token&& pathname === "/") {
      setShowToggle(true);
    }
  },[showToggle, pathname]);

  return (
    <>
      {showToggle ? <Toggle /> : null}
      {children}
    </>
  );
}
