import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

// JSX - HTML like or XML like syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);