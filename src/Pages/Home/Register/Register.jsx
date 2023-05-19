import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const { createUser, googleSignIn } = useContext(AuthContext);

    // handel register signIn
    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    };

    // google signIn handler
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero my-10 min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-5xl text-black font-bold">Register</h1>
                    <form onSubmit={handelSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
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
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p>If you already have an account, just <Link className="text-blue-500 font-bold" to='/login'>login</Link>.</p>
                </div>
                    <hr  className="w-2/3 mx-auto font-bold " />
                <div className="w-2/1 flex mx-auto justify-between ">
                    <Link className="font-bold mb-3 text-2xl text-red-500  mr-7" onClick={handelGoogleSignIn}>Google</Link>
                    <Link className="font-bold mb-3 text-2xl text-green-500 " onClick={handelGoogleSignIn}>GitHub</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;