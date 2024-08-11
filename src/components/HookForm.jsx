import { useForm } from "react-hook-form";

const HookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="w-50 align-self-start m-auto my-4">Dipnot Form</h2>
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                id="firstName"
                placeholder="Firstname"
                className="form-control"
                {...register("firstName", { required: "Name is required!" })}
              />
              {errors.firstName && (
                <p className="mb-0 text-danger">{errors.firstName.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                id="lastName"
                placeholder="Lastname"
                className="form-control"
                {...register("lastName", { required: "Surname is required!" })}
              />
              {errors.lastName && (
                <p className="mb-0 text-danger">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12 mt-2">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="form-control"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address!",
                  },
                })}
              />
              {errors.email && (
                <p className="mb-0 text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12 mt-2">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 caracters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password can not longer than 20 caracters!",
                  },
                })}
              />
              {errors.password && (
                <p className="mb-0 text-danger">{errors.password.message}</p>
              )}
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-3 ms-auto d-flex">Submit</button>
      </form>
    </>
  );
};

export default HookForm;