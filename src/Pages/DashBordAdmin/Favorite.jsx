

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import FavoriteDetails from "./FavoriteDetails";



const Favorite = () => {
   const [favorite ,setFavorite] =useState([])
   useEffect(()=>{
     fetch("https://server-12-ten.vercel.app/favorite")
     .then(res=>res.json())
     .then(data=>{
      // console.log(data);
      setFavorite(data)
     })
   },[])

   const handleDelete =(id)=>{
      Swal.fire({
      title: "Are you sure?",
     text: "You won't be delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO : you don,t work backend----
     fetch(`https://localhost/favorite/${id}`,{
    method:'DELETE'
     })
      .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.deletedCount > 0){
      Swal.fire({
    title: "Deleted!",
     text: "Your bio data has been deleted.",
      icon: "success"
      });
      }
      const remaing = favorite.filter(favorites=>favorites._id !== id)
      setFavorite(remaing)
      })
      }
    }) 
    }

 return (
  <div>
        <h3 className="text-4xl font-bold text-center mt-12 text-lime-500">My Favorite Page</h3>                                                                                  
        <table className="table  ml-3  mx-auto mt-5 
 bg-gradient-to-r from-[#151515] to-green-300">
<thead >
      <tr className="text-white text-lg">
        <th> Name</th>
        <th> Biodata Id</th>
        <th>Permanent Address</th>
        <th>Occupation</th>
        <th>Delete Button</th>
      </tr>
    </thead>
</table>
     <div className="mt-5 ">
      {
         favorite.map(favorites=><FavoriteDetails key={favorites._id} 
            favorites={favorites} ></FavoriteDetails>)
      }
     </div>
  </div>
 );
};

export default Favorite;