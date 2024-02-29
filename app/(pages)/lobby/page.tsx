"use client";

import React from "react";
import "/app/globals.css";
import UrlButton from "../../ui/UrlButton";

export default function Lobby() {
  return (
    <>
      <UrlButton url={"/login"} title={"login"} />
      <UrlButton url={"/sigup"} title={"sigup"} />
    </>
  );
}
