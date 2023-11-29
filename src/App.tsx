import React from 'react';
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";


function App() {
    return (
        <div>
            <TopNav/>
            <Featured/>
            <Delivery/>
            <TopPicks/>
        </div>
    );
}

export default App;
