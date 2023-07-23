import React from 'react';
import Search from './search/Search';
import Popularclg from './popularclg/Popularclg';
import Gallery from './gallery/Gallery';
import Research from './research/Research';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Popularclg></Popularclg>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;