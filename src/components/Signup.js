import React from "react";

const Signup = () => {
  return (
    <>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">
                          UserName
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="form-control form-control-lg"
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="E-mail"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          placeholder="password"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="cpassword">
                          Confirm password
                        </label>
                        <input
                          type="cpassword"
                          id="cpassword"
                          name="cpassword"
                          className="form-control form-control-lg"
                          placeholder="confirm-password"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Signup
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
