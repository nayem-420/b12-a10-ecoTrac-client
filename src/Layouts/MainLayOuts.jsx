import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayOuts = () => {
    return (
      <div>
        <header className="">
          <Navbar></Navbar>
        </header>
        <main className="flex flex-col min-h-screen px-4 py-8 container mx-auto">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default MainLayOuts;