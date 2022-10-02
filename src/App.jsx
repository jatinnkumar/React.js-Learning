import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about/:firstName/:lastName" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;