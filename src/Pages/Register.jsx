import { Link } from "react-router-dom";
import "./Styles/registerLogin.css";

export const Register = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto h-[100vh]">
      <img
        src="https://i.postimg.cc/8PW29kdB/boat-Animation.gif"
        alt="Image"
        srcset=""
        className="hidden lg:block flex-1"
      />

      <div className="main p-10 flex-1">
        <h2>Create New Acount</h2>
        <form action="">
          <label for="first">First Name:</label>
          <input
            placeholder="enter your first name"
            type="text"
            id="first"
            name="first"
            required
          />

          <label for="last">Last Name:</label>
          <input
            placeholder="enter your last name"
            type="text"
            id="last"
            name="last"
            required
          />

          <label for="email">Email:</label>
          <input
            placeholder="enter your email"
            type="email"
            id="email"
            name="email"
            required
          />

          <label for="password">Password:</label>
          <input
            placeholder="enter your password"
            type="password"
            id="password"
            name="password"
            required
          />

          <button type="submit">Create Acount</button>
        </form>
        <h5>
          Already have Acount? <Link to="/login">Login Now</Link>
        </h5>
      </div>
    </div>
  );
};
