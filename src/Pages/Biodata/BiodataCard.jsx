import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const BiodataCard = ({setFilter,regularItem  }) => {
  
  const {user}= useContext(AuthContext)
  console.log(user)
  const {
    _id,
    type,
    profileImage,
    permanentDivision,
    age,
    occupation
  } = regularItem;
  
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
    axiosPublic.get("/biodata").then((res) => {
      console.log(res.data);
       const item = res.data.filter(bio=>{bio.type===type})
       setFilter(item)
    });
  }, [axiosPublic,type,setFilter]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-xl h-96"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Biodata_type: {type}</h2>
        <p className="">Age: {age}</p>
        <p>Occupation: {occupation}</p>
        <p>Permanent_devision: {permanentDivision}</p>

        <div className="card-actions">
          {user && (
            <Link to={`/allBio/${_id}`}>
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                View Details
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataCard;
