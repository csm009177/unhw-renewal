"use client";

import Link from "next/link";
import "../globals.css";
import Toggle from "../ui/Toggle";
import { useEffect, useState } from "react";
import Lobby from "./lobby/page";
import { tokenContext } from "../context/styleContext";

export default function MainPage(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const displayTokenFromLocalStorage = (): string | null => {
    // 로컬 스토리지에서 토큰을 가져옵니다.
    const token = localStorage.getItem("token");

    // 가져온 토큰이 있으면 표시하고 없으면 null을 반환합니다.
    if (token) {
      console.log("토큰 : ", token);
      return token;
    } else {
      console.log("토큰이 없습니다.");
      return null;
    }
  };

  useEffect(() => {
    const tokenFromLocalStorage = displayTokenFromLocalStorage();
    setToken(tokenFromLocalStorage);
  }, [token]);

  return <>{token ? <Toggle /> : <Lobby />}</>;
}
