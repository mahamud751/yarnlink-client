"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/UserProvider";
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { email, password } = data;
    await loginUser(email, password);
    router.push("/");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <div className="container myaccount">
        <div className="col-lg-10 col-sm-12 mx-auto login-div">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto bg-dark p-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1675799807356-6e97c49f22ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={700}
                height={200}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="col-sm-9 mx-auto py-4 my-4">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="KgvbWDJZDDwud524LbE5WM5ynJwTQuhfyLSb8unR"
                  />{" "}
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label>Email</label>
                      <input
                        id="identity"
                        type="email"
                        className="form-control p-3 "
                        name="identity"
                        defaultValue
                        placeholder="Email"
                        autoComplete="off"
                        {...register("email", {
                          required: true,
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label>Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control p-3 "
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        defaultValue
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be 6 characters long",
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <a
                      className="btn btn-link mb-2 float-right"
                      href="password/reset.html"
                    >
                      Forgot Your Password?{" "}
                    </a>
                    <button
                      type="submit"
                      className="clearfix btn btn-site btn-block py-2"
                    >
                      <i className="fa fa-key mr-1" /> Login{" "}
                    </button>
                  </div>
                </form>
                <p className="text-center my-3">OR</p>
                <Link
                  className="btn btn-block border border-dark text-dark btn-link bg-white py-2 mb-2 text-center"
                  href="/register"
                >
                  New? Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
