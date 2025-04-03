import React, { useContext, useState } from 'react';
import { DataContext } from '../context/UseContext';

import Card from '../components2/Card';

const Home = () => {
  const { data, loading, error } = useContext(DataContext);
     
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeClass =isDarkTheme?'bg-gray-900 text-white':'bg-white text-black';

  if (loading) return <div className="text-center mt-4">Loding..</div>;
      if (error) return <div className="text-center mt-4 text-red-500">glt: {error}</div>;

  return (
    <div className={`${themeClass} min-h-screen`}>
      <button
        onClick={toggleTheme} className="p-2 m-4 border rounded bg-gray-500 text-white hover:bg-gray-900">clck</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map(item => (
          <Card key={item.id} id={item.id} title={item.title} description={item.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;