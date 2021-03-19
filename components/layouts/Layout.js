import React from 'react';
import Main from './Main';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-2">
      <Navbar />
      <Main children={children} />
    </div>
  );
}
