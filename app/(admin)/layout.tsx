"use client";
import React from "react";
import SideBar from "./_components/SideBar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1">
      <SideBar />
      {children}
    </div>
  );
}
