
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {
    const navigate = useNavigate()
    const {signUpWithEmailAndPassword} = useContext(AuthContext)
    
    const handleRegister= (e)=>{
        e.preventDefault();
        
        const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,password,email);
        signUpWithEmailAndPassword(email,password).then(result=>{

            updateProfile(result.user, {
                displayName: name,photoURL:photo}).then(() => {
                    console.log(result.user)
                    navigate('/')  
                    Swal.fire("signUp complete");
                // Profile updated!
                // ...
              }).catch((error) => {
                console.log(error)
                // An error occurred
                // ...
              });
              
        }).catch(error=>console.error(error))
    }
    return (
       <div className="">
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-2xl font-bold text-center pt-5">SignUp now!</h1>
        <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo Url</span>
            </label>
            <input type="text" placeholder="name" name="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
        <Link to="/login" className="text-center pb-5 px-5">Already you have an Account ? <span className="font-bold">Please Login</span>
        </Link>
    </div>
  </div>
</div>
       </div>
    );
};

export default SignUp;