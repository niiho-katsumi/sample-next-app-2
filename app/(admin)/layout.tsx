"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import { useRouteGuard } from "../_hooks/useRouteGuard";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useRouteGuard();
  return (
    <>
      {/* サイドバー */}
      <SideBar />

      {/* メインエリア */}
      <div className="ml-70 p-4">{children}</div>
    </>
  );
}
