import { Player } from "@lottiefiles/react-lottie-player";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginSVG from "../../assets/Animation - 1734756802577.json";
import { AuthContext } from "../../context";

export default function Register() {
  const { CreateUser } = useContext(AuthContext);
  const [userState, setUserState] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserState({
      ...userState,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(userState);
    const { email, password } = userState;
    try {
      const response = await CreateUser(email, password);
      const result = await response.user;
      {
        result && navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setUserState({ fullName: "", email: "", password: "" });
  };
  return (
    <>
      <h1 className="text-5xl font-bold text-center">Register!</h1>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="mr-12">
              <Player src={LoginSVG} className="player" loop autoplay />
            </div>
          </div>
          <div className="card w-1/2 max-w-sm shrink-0 ">
            <form className="card-body" onSubmit={handleForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="fullName"
                  value={userState.fullName}
                  onChange={handleInput}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={userState.email}
                  onChange={handleInput}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={userState.password}
                  onChange={handleInput}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-4">OR</p>
            <button className="btn btn-primary mx-auto px-28">
              Login With Google
            </button>
            <p className="my-4 text-center">
              Already Have a account{" "}
              <Link className="text-orange-500" to="/login">
                Login In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
