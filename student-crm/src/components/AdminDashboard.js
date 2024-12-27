import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold">Manage Teachers</h3>
          <p className="text-sm text-gray-600">
            Add, edit, or delete teacher accounts for your school.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold">View Reports</h3>
          <p className="text-sm text-gray-600">
            Access student performance and fee reports.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold">School Settings</h3>
          <p className="text-sm text-gray-600">
            Configure school-related settings and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
