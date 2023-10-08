import Link from "next/link";
import normal from "./styles/normal";

const items = [
   {
      title: "Home",
      url: "/"
   },
   {
      title: "Products",
      url: "/products"
   },
   {
      title: "Cart",
      url: "/cart"
   },
   {
      title: "Account",
      url: "/user/me"
   },
];

const Header = () => {
   return (
      <header className="w-full h-16 bg-slate-200 flex justify-start items-center">
         {
            items.map(
               e => (
                  <Link
                     key={e.title}
                     href={e.url}
                     className={`
                                 w-28
                                 h-min
                                 p-2
                                 m-3
                                 text-center

                                 bg-white
                                 
                                 ${normal}
                                 
                                 rounded-xl
                                 `}
                  >
                     {e.title}
                  </Link>
               )
            )
         }
      </header>
   );
}

export default Header;