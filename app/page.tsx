import { Suspense } from "react";
import { Products, Ads, Loading } from "./components";

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