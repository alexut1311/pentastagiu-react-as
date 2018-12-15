import React from 'react';
import ReactDOM from "react-dom";


function tick(){
    const date=new Date().toLocaleString();
    const component=(
        <div>
            <div>
                Continut static
            </div>
            <div>
                {date}
            </div>
        </div>
    );


ReactDOM.render(component, document.getElementById("root"))}

setInterval(tick,1000)