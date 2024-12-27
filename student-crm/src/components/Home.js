import React from "react";
import {
  FaUserPlus,
  FaMoneyBillWave,
  FaChartLine,
  FaBell,
  FaSearch,
} from "react-icons/fa";

const DashboardCard = ({ icon, title, description, onClick }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
    onClick={onClick}>
    <div className="text-purple-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => {
  const handleAddStudent = () => {
    // Implement add student functionality
    console.log("Add student clicked");
  };

  const handleManageFee = () => {
    // Implement manage fee functionality
    console.log("Manage fee clicked");
  };

  const handleAcademicTracking = () => {
    // Implement academic tracking functionality
    console.log("Academic tracking clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white text-gray-800">
      <header className="bg-purple-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EduConnect Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-700 transition duration-300">
            <FaBell className="text-xl" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 rounded-full bg-purple-500 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in-down">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome, Administrator
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            What would you like to do today?
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <DashboardCard
              icon={<FaUserPlus />}
              title="Add Student Record"
              description="Register new students and manage existing records."
              onClick={handleAddStudent}
            />
            <DashboardCard
              icon={<FaMoneyBillWave />}
              title="Manage Student's Fee"
              description="Track payments, generate invoices, and manage financial records."
              onClick={handleManageFee}
            />
            <DashboardCard
              icon={<FaChartLine />}
              title="Academic Tracking"
              description="Monitor student performance, grades, and academic progress."
              onClick={handleAcademicTracking}
            />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FaUserPlus className="text-purple-600 mr-3" />
                <span>New student John Doe added to Class 10A</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaMoneyBillWave className="text-purple-600 mr-3" />
                <span>Fee payment received from Jane Smith</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaChartLine className="text-purple-600 mr-3" />
                <span>Quarterly report generated for Class 9B</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Total Students</h4>
              <p className="text-3xl font-bold text-purple-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Fees Collected</h4>
              <p className="text-3xl font-bold text-purple-600">$98,765</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Average GPA</h4>
              <p className="text-3xl font-bold text-purple-600">3.7</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
