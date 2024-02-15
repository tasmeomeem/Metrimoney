
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";



const Login = () => {
    const {LogInWithEmailAndPassword} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister= (e)=>{
        e.preventDefault();
        
        const form = e.target
        navigate('/')
        const email = form.email.value
        const password = form.password.value
        console.log(password,email);
        LogInWithEmailAndPassword(email,password)
        .then(result=>{
            console.log(result.user)
        });
    }

    return (
       
       <div className="">
        
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-2xl font-bold text-center pt-5">Login Now</h1>
        <form onSubmit={handleRegister} className="card-body">
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
                <button className="btn btn-primary">Login</button>
                
            </div>
        </form>

        <Link to="/signUp" className="px-10 pb-5" > You donot have an account? Please<span className="font-bold">SignUp</span>
        </Link>
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;