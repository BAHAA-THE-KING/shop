import { Suspense } from "react";
import { Products, Ads, Loading, About } from "./components";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Ads />
        <Products />
      </main>
      <footer>
        <About />
      </footer>
    </Suspense>
  );
}