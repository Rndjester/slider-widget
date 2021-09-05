import React from 'react';
import Widget from "./component/widget/widget";


function App() {
    return (
        <div>
           <Widget step={10} initValue={0} initMin={0} initMax={1000}/>
        </div>
    )
}

export default App;
