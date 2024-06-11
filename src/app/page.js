"use client";
import DogHome from "@/components/DogHome";
import Header from "@/components/Header";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Header />
      <DogHome />
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Map />
        </div>
      </div>
    </div>
  );
}
