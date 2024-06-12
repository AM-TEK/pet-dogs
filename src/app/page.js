"use client";
import DogHome from "@/components/DogHome";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <DogHome />
    </div>
  );
}
