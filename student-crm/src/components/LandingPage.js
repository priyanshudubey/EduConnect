import React, { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaChartLine,
  FaMoneyBillWave,
  FaUserLock,
  FaTachometerAlt,
  FaLock,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import "./LandingPage.css";

const Feature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    <div className="text-purple-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AnimatedNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="text-4xl font-bold text-purple-600">{count}+</span>;
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4 text-purple-600">
            Welcome to EduConnect
          </h1>
          <p className="text-2xl mb-8 text-gray-700">
            Your Ultimate Student Management Companion
          </p>
          <p className="mb-12 text-lg max-w-3xl mx-auto">
            EduConnect is a cutting-edge Student CRM system designed to
            streamline administrative tasks, empower teachers, and enhance
            student success.
          </p>
          <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Get Started Today! <FaArrowRight className="inline-block ml-2" />
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose EduConnect?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<FaUserGraduate />}
              title="Student Records Management"
              description="Effortlessly store and organize student details."
            />
            <Feature
              icon={<FaChartLine />}
              title="Academic Tracking"
              description="Comprehensive monitoring of student performance."
            />
            <Feature
              icon={<FaMoneyBillWave />}
              title="Fee Management"
              description="Track and manage student fees with precision."
            />
            <Feature
              icon={<FaUserLock />}
              title="Role-Based Access"
              description="Secure, tailored access for admins and teachers."
            />
          </div>
        </section>

        <section className="mb-16 bg-purple-600 text-white py-12 rounded-lg shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              EduConnect by the Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <AnimatedNumber
                  end={1000}
                  duration={2000}
                />
                <p className="text-xl">Schools Served</p>
              </div>
              <div>
                <AnimatedNumber
                  end={50000}
                  duration={2000}
                />
                <p className="text-xl">Teachers Empowered</p>
              </div>
              <div>
                <AnimatedNumber
                  end={1000000}
                  duration={2000}
                />
                <p className="text-xl">Students Managed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Feature
              icon={<FaTachometerAlt />}
              title="Personalized Dashboards"
              description="Tailored views for admins and teachers."
            />
            <Feature
              icon={<FaLock />}
              title="Secure Login"
              description="Robust authentication and authorization."
            />
            <Feature
              icon={<FaExpandArrowsAlt />}
              title="Scalable Design"
              description="Grows with your institution's needs."
            />
            <Feature
              icon={<FaShieldAlt />}
              title="Data Privacy Compliant"
              description="Adheres to GDPR and CCPA regulations."
            />
            <Feature
              icon={<FaBolt />}
              title="Lightning-Fast Performance"
              description="Optimized for speed and efficiency."
            />
            <Feature
              icon={<FaUserGraduate />}
              title="Student-Centric Approach"
              description="Focused on enhancing student success."
            />
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How EduConnect Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">
                <FaUserLock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admins</h3>
              <p>Effortlessly manage teacher accounts and system settings.</p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">
                <FaUserGraduate />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teachers</h3>
              <p>
                Handle student information, academic records, and fees through
                an intuitive portal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-4xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-2">Centralized Data</h3>
              <p>
                Access everything you need from one secure, simple, and
                effective platform.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Join the EduConnect Revolution
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Start transforming how your institution manages student data.
            EduConnect is your trusted partner in linking learning, seamlessly.
          </p>
          <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Get Started Today! <FaArrowRight className="inline-block ml-2" />
          </button>
        </section>
      </main>

      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2023 EduConnect. All rights reserved.</p>
          <p className="text-sm">
            Empowering education through innovative management solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
