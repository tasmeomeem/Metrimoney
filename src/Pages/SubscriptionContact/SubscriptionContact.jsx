
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SubscriptionContact = () => {
    
      //subcription
  const {user}= useContext(AuthContext)
  console.log(user)
  const biodata = useLoaderData();
  const { type, profileImage, permanentDivision, age, occupation,email,phone } =
    biodata || {};

  return (
    <div className="container mx-auto grid grid-cols-2 pt-20 ">
      <div className="card card-side bg-red-100 h-[400px] shadow-xl">
        <figure>
          <img src={profileImage} className="h-96 w-56" />
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
          <p className="text-xl">
            <span className="font-bold text-xl">Email: </span>
            {email}
          </p>
          <p className="text-xl">
            <span className="font-bold text-xl">phone: </span>
            {phone}
          </p>
          <div className="flex gap-5">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
                Contact
            </button>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
                Favourit
            </button>
        </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default SubscriptionContact;


