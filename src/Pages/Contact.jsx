import "./Styles/contact.css";

export const Contact = () => {
  return (
    <div className="contactDiv mx-auto  my-48 h-full lg:w-[50%] w-[90%]">
      <h2 className="text-center mb-4 text-2xl font-bold">Contact With Us</h2>
      <div className="input_container">
        <input
          placeholder="Enter your first name"
          type="text"
          id="first"
          name="first"
          required
        />

        <input
          placeholder="Enter your email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <textarea
        name=""
        id=""
        cols="40"
        rows="5"
        placeholder="Your message"
        className="p-2"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#f7a582] text-white p-3 my-4 rounded-lg"
      >
        Send Massages
      </button>
      <div className="location_container">
        <h6>Dhanmondi, Dhaka City 1200, Bangladesh</h6>
        <h6>+88 01750 14 14 14</h6>
      </div>
    </div>
  );
};
