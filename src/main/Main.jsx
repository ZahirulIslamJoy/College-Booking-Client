import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../home/shared/Nav';
import Footer from '../home/shared/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;