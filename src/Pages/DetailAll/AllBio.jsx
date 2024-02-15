
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllBio = () => {
  const {user}= useContext(AuthContext)
  console.log(user)
  const biodata = useLoaderData();
  const { type, profileImage, permanentDivision, age, occupation,_id } =
    biodata || {};

  return (
    <div className="container mx-auto grid grid-cols-2 pt-20">
      <div className="card card-side bg-red-100 h-[300px] shadow-xl">
        <figure>
          <img src={profileImage} className="h-80 w-56" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{type}</h2>
          <p>
            <span className="font-bold text-xl">PermanentDivision : </span>
            {permanentDivision}
          </p>
          <p className="text-xl">
            <span className="font-bold text-xl">Age:</span> {age}
          </p>
          <p className="text-xl">
            <span className="font-bold text-xl">Occupation: </span>
            {occupation}
          </p>
          <div className="card-actions">
          {user && (
            <Link to={`/subscriptionContact/${_id}`}>
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                Contact
              </button>
            </Link>
          )}
        </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AllBio;
