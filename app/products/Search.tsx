const cats = ["food", "drink", "toys"];

function Search(
   { className }: {
      className?: string
   }
) {
   return (
      <div className={"join " + className}>
         <div>
            <div>
               <input className="input input-bordered join-item" placeholder="Search" />
            </div>
         </div>
         <select className="select select-bordered join-item" defaultValue={"none"}>
            <option disabled>Filter</option>
            {
               cats.map(
                  e =>
                     <option key={e}>{e}</option>
               )
            }
            <option>none</option>
         </select>
         <div className="indicator">
            <button className="btn join-item">Search</button>
         </div>
      </div>
   );
}

export default Search;