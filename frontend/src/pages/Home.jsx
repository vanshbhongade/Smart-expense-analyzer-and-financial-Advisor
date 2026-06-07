import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Smart Expense Analyzer
          </h1>

          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-green-500 rounded-lg font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Manage Your Finances Smarter
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Track expenses, manage budgets, get financial insights,
          and improve your savings with Smart Expense Analyzer.
        </p>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-10">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-3">
              Expense Tracking
            </h4>
            <p className="text-gray-600">
              Add and manage daily expenses easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-3">
              Budget Planning
            </h4>
            <p className="text-gray-600">
              Set monthly budgets and track spending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-3">
              Analytics Dashboard
            </h4>
            <p className="text-gray-600">
              Visualize income and expenses using charts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-12">
        <p>© 2026 Smart Expense Analyzer. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

// import React from "react";

// function Home() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Smart Expense Analyzer</h1>
//       <p>Track expenses, manage budgets, and improve savings.</p>

//       <button>Login</button>
//       <button style={{ marginLeft: "10px" }}>Register</button>
//     </div>
//   );
// }

// export default Home;