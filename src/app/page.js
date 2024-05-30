"use client";
import DogList from "@/components/DogList";
import Header from "@/components/Header";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Header />
      <DogList />
      <Map />
    </div>
  );
}
