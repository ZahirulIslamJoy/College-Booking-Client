import React from 'react';
import Search from './search/Search';
import Popularclg from './popularclg/Popularclg';
import Gallery from './gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Popularclg></Popularclg>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;