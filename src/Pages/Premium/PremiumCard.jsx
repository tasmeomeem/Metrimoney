import { Link } from "react-router-dom";

const PremiumCard = ({ premium }) => {
  const {
    biodata_type,
    profile_image,
    permanent_division,
    age,
    occupation
  } = premium;
  return (
    <div className="card w-full bg-base-100 flex flex-col md:flex-row shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={profile_image}
         
          className="rounded-xl h-96 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Biodata_type: {biodata_type}</h2>
        <p className="">Age: {age}</p>
        <p>Occupation: {occupation}</p>
        <p>Permanent_devision: { permanent_division}</p>
        <Link to="/detailsPre">
            <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View  details</button>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default PremiumCard;
