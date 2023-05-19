import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            form.reset();
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-slate-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handelLogin}>
                        <h1 className="text-5xl font-bold text-black">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                        <div>
                            <p>If you do not have an account there yet,<Link className="font-bold text-blue-500" to="/register">Register !</Link>one.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;