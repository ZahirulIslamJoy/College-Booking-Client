import React from 'react';
import Nav from '../shared/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;