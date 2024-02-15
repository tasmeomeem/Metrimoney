import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const WorkingProcess = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold pt-20">How Website Works</h1>
            <div className="grid lg:grid-cols-3 py-10">
                <Link to="/Login">
                    <img className="bg-red-800 rounded-full h-20 px-5 py-5  pl-4 ml-48" src="https://i.ibb.co/vLjVW9m/user.png"/>
                    <button className="btn btn-outline border-0 border-b-4 mt-4  text-xl">Create an Account<span className="text-xl"><IoMdLogIn /></span></button>
                    <p> Create an account with your valid information and picture for your search.. </p>
                    
                </Link>
                <div>
                    <img className="bg-red-800 rounded-full h-20 px-5 py-5  pl-4 ml-48" src="https://i.ibb.co/LzmZqT4/user-avatar.png"/>
                    <button className="btn btn-outline border-0 border-b-4 mt-4  text-xl">Profile setup<span className="text-xl"><IoMdLogIn /></span></button>
                    <p>Visit our Premium Bio_data and click the View details Button .visit our premium biodata and Contact with them ..</p>
                </div>
                <div>
                    <img className="bg-red-800 rounded-full h-20 px-5 py-5  pl-4 ml-48" src="https://i.ibb.co/kJ0CtxB/contact-book.png"/>
                    <button className="btn btn-outline border-0 border-b-4 mt-4  text-xl">Contact<span className="text-xl"><IoMdLogIn /></span></button>
                    <p>Before Contact with them you have to pay your fee... </p>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;

