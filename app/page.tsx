"use client";

import { Suspense } from "react";
import Loading from "./Loading";
import Ads from "./Ads";
import { Products } from "./components";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Ads />
        <Products />
      </main>
    </Suspense>
  );
}