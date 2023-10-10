import { Search, ListOfProducts } from "../components";

export default function Home(
  { search, orderBy, orderType }: {
    search?: string,
    orderBy?: string,
    orderType?: string
  }
) {
  return (
    <div className="flex flex-col justify-end items-stretch mt-2">
      <Search className="mr-2 flex justify-end" />
      <ListOfProducts />
    </div>
  );
}