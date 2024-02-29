"use client";

import "../globals.css";
import Toggle from "../ui/Toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setIsLoggedIn(!!token); // 토큰이 존재하면 true, 아니면 false로 설정
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? <Toggle /> : null}
      {children}
    </>
  );
}
