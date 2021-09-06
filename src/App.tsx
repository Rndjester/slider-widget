import React from 'react';
import Widget from "./component/widget";


function App() {
    return (
        <div>
           <Widget step={10} initValue={0} min={0} max={1000}/>
        </div>
    )
}

export default App;
