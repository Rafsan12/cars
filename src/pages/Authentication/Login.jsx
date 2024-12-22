import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginSVG from "../../assets/Animation - 1734756802577.json";
import { AuthContext } from "../../context";

export default function Login() {
  const { userWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = async (data) => {
    const { email, password } = data;
    try {
      const response = await userWithEmailAndPassword(email, password);
      const result = response.user;
      navigate("/");
      if (result) {
        const handleForm = async (data) => {
          const { email, password } = data;
          try {
            const response = await userWithEmailAndPassword(email, password);
            const result = response.user;
            navigate("/");
            if (!result) {
              navigate("/register");
            }
            console.log(result);
          } catch (error) {
            console.log(error.message);
          }
        };
        navigate("/register");
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="ml-12">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <Player src={LoginSVG} className="player" loop autoplay />
          </div>
        </div>
        <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 ">
          <form className="card-body" onSubmit={handleSubmit(handleForm)}>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className={`input input-bordered ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>

          <p className="text-center mb-4">OR</p>
          <button className="btn btn-primary mx-auto px-28">
            Login With Google
          </button>

          <p className="my-4 text-center">
            New to Car Doctor Website{" "}
            <Link className="text-orange-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
