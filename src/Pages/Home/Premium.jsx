import { useEffect, useState } from "react";
import PremiumCard from "../Premium/PremiumCard";

const Premium = () => {
  const [premium, setPremium] = useState([]);
  console.log(premium);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://server-12-ten.vercel.app/premium');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setPremium(data);
      } catch (error) {
        console.error("Error fetching premium data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="container mx-auto pt-10">
    //   <h1 className="text-center text-4xl font-bold">Premium Bio_data</h1>
    //   <div className="grid md:grid-cols-2 h-300 lg:grid-cols-3 gap-24 pt-10">
    //     {premium.map((premiumItem) => (
    //       <PremiumCard key={premiumItem._id} premium={premiumItem} />
    //     ))}
    //   </div>
    //   <div className="text-center pt-10">
    //     {/* <Link to=""><button className="btn bg-green-500 h-4 text-black">Show All</button></Link> */}
    //   </div>
    // </div>
    <div className="container mx-auto pt-10">
    <h1 className="text-center text-4xl font-bold">Premium Bio_data</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-24 pt-6 md:pt-10">
        {premium.map((premiumItem) => (
            <PremiumCard key={premiumItem._id} premium={premiumItem} />
        ))}
    </div>
    <div className="text-center pt-6 md:pt-10">
        {/* <Link to=""><button className="btn bg-green-500 h-4 text-black">Show All</button></Link> */}
    </div>
</div>

  );
};

export default Premium;
