import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import myContext from "../context/myContext";
import Loader from "./Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate(); // Hook for navigation

  const signup = () => {
    setLoading(true);
    
    // Basic validation
    if (name === "" || email === "" || password === "") {
      setLoading(false);
      return toast.error("All fields are required");
    }

    // Simple if-else authentication
    const validEmail = "1234"; // Example email
    const validPassword = "1234"; // Example password

    if (email === validEmail && password === validPassword) {
      // Store email and password in local storage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      toast.success("Signup Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);

      // Redirect to default route
      navigate("/"); // Redirect to the home page ("/")
    } else if (email === "admin" && password === "admin") {
      // Store admin credentials in local storage
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminPassword", password);

      setLoading(false);
      toast.success("Admin Signup Successfully");
      navigate("/");
    } else {
      toast.error("Invalid email or password.");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={signup}
            className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account? {"   "}
            <Link className="text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
