import React from 'react';
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";


function App() {
    return (
        <div>
            <TopNav/>
            <Featured/>
            <Delivery/>
            <TopPicks/>
            <Meal/>
        </div>
    );
}

export default App;
