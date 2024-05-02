import { Link } from "react-router-dom";
import "./Styles/registerLogin.css";

export const Login = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto h-[100vh]">
      <img
        src="https://i.postimg.cc/8PW29kdB/boat-Animation.gif"
        alt="Image"
        srcset=""
        className="hidden lg:block flex-1"
      />

      <div className="main p-10 flex-1">
        <h2>Log In</h2>
        <form action="">
          <label for="first">User Name:</label>
          <input
            placeholder="enter your User Name (Optional)"
            type="text"
            id="first"
            name="first"
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

          <button type="submit">Login</button>
        </form>
        <h5>
          Don't have an Acount? <Link to="/register">Register Now</Link>
        </h5>
      </div>
    </div>
  );
};
