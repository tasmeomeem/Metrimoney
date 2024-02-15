import { useEffect, useState } from "react";
import BiodataCard from "./BiodataCard";

import Filter from "./Filter";


const Biodata = () => {
  
  const [regular, setRegular] = useState([]);
  const [filter, setFilter] = useState([]);
  console.log(regular);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://server-12-ten.vercel.app/biodata");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setRegular(data);
      } catch (error) {
        console.error("Error fetching regular data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-center text-4xl font-bold">All Bio_data</h1>
      <div className="grid md:grid-cols-2 h-300 lg:grid-cols-3 gap-24 pt-10">
        {regular.map((regularItem) => (
          <BiodataCard key={regularItem._id} setFilter={setFilter}  regularItem={regularItem} />
        ))}
      </div>
      <div className="text-center pt-10">
        {/* <Link to=""><button className="btn bg-green-500 h-4 text-black">Show All</button></Link> */}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filter.map((filters) => (
          <Filter key={filters._id} filters={filters}></Filter>
        ))}
      </div>
    </div>
  );
};

export default Biodata;
