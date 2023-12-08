import React from 'react';

const BookCall = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Book a Call</h2>
        <input
          type="text"
          placeholder="Name"
          className="mb-2 p-2 w-full border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 w-full border rounded"
        />
        <input
          type="datetime-local"
          className="mb-4 p-2 w-full border rounded"
        />
        <button className="p-2 w-full bg-blue-500 text-white rounded">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookCall;