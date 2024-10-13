import { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthType,
  authenticate,
  createUser,
} from "../features/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/authRoutes/Input";

function AuthRoutes() {
  const { authType, isAuthenticated, status, error } = useSelector(
    (state) => state.authentication
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    if (authType === "login") {
      dispatch(authenticate({ email, password }));
    } else if (authType === "signup") {
      dispatch(createUser({ email, password }));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center px-2 py-16 sm:py-32  mx-5">
      <div className="">
        <div className="flex gap-1 justify-center rounded-top">
          <button
            className={`authBtn ${authType === "login" ? "authActive" : ""} `}
            onClick={() => dispatch(setAuthType("login"))}
          >
            Login
          </button>
          <button
            className={`authBtn ${authType === "signup" ? "authActive" : ""}`}
            onClick={() => dispatch(setAuthType("signup"))}
          >
            Signup
          </button>
        </div>

        <div className="bg-secondary p-8">
          <div className="flex justify-center mb-4">
            <FaRegUserCircle className="text-4xl" />
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="Email"
              name="email"
              type="email"
              register={register}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              }}
              error={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              error={errors.password}
            />
            {error && <p className="text-red">{error}</p>}

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 rounded border-[1px] border-solid border-secondary--shade__1 hover:bg-white slowTransition"
              >
                <span>{authType === "login" ? "Login" : "Register"}</span>
                <FaLongArrowAltRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthRoutes;
