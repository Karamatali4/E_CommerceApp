// app/routes/user.login.jsx

import { Form, Link } from "@remix-run/react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section - Images */}
        <div className="w-full lg:w-1/2 bg-blue-500 text-white p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6">E-Commerce</h1>
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            <img
              src="/p1.jpg"
              alt="img1"
              className="rounded-xl w-full h-48 object-cover"
            />
            <img
              src="/p2.jpg"
              alt="img2"
              className="rounded-xl w-full h-28 object-cover"
            />
            <img
              src="/p3.jpg"
              alt="img3"
              className="rounded-xl w-full h-28 object-cover"
            />
            <img
              src="/p4.jpg"
              alt="img4"
              className="rounded-xl w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">
            Let’s <span className="text-blue-600">Register</span> 👇
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your details to create your account.
          </p>

          <Form method="post" className="space-y-5">
            <div>
              <label className="block mb-1  text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter name"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-lg  font-medium text-blue-500">
                Gender
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="radio" name="gender" value="male" required />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="radio" name="gender" value="female" required />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-right text-sm text-blue-600">
              
              <Link to="/login" className="text-blue-600 text-sm">
                Already have an account?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
