import React, { useState } from 'react';
import {toast} from 'react-toastify';
const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Note Add', { title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md bg-gray">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 bg-gray">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full border border-cyan-900 rounded-md shadow-sm "
            required/>
        </div>




        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700"></label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}className="mt-1 block w-full border border-cyan-900 rounded-md shadow-sm " rows="4" required></textarea>
        </div>
        <button 
          onClick={() => toast.success('Note Added')}
         
        type="submit" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-900">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;