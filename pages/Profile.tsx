import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;