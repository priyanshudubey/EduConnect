import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
    <p className="text-gray-600 text-center">{role}</p>
  </div>
);

const ValueProposition = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-purple-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4 text-purple-600">
            About EduConnect
          </h1>
          <p className="text-2xl mb-8 text-gray-700">
            Revolutionizing Student Management
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              At EduConnect, we're on a mission to transform educational
              institutions by providing innovative, user-friendly, and efficient
              student management solutions. We believe that by empowering
              administrators and teachers with the right tools, we can
              contribute to the success and growth of every student.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueProposition
              icon={<FaGraduationCap />}
              title="Student-Centric"
              description="We put students at the heart of everything we do, ensuring our solutions contribute to their success."
            />
            <ValueProposition
              icon={<FaUsers />}
              title="Collaboration"
              description="We foster collaboration between administrators, teachers, and students for a holistic educational experience."
            />
            <ValueProposition
              icon={<FaChartLine />}
              title="Continuous Improvement"
              description="We're committed to constantly evolving our platform based on user feedback and technological advancements."
            />
            <ValueProposition
              icon={<FaHandshake />}
              title="Reliability"
              description="We provide dependable solutions that institutions can trust for their critical operations."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Jane Doe"
              role="Founder & CEO"
              image="/placeholder.svg?height=128&width=128"
            />
            <TeamMember
              name="John Smith"
              role="CTO"
              image="/placeholder.svg?height=128&width=128"
            />
            <TeamMember
              name="Emily Johnson"
              role="Head of Product"
              image="/placeholder.svg?height=128&width=128"
            />
            <TeamMember
              name="Michael Brown"
              role="Head of Customer Success"
              image="/placeholder.svg?height=128&width=128"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-xl">Schools Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">50,000+</p>
                <p className="text-xl">Teachers Empowered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">1,000,000+</p>
                <p className="text-xl">Students Managed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Shaping the Future of Education
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Whether you're an educational institution looking to streamline your
            operations or a talented individual wanting to make a difference in
            education, we'd love to hear from you.
          </p>
          <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Get in Touch
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
