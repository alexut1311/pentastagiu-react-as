import React from 'react';
import "./userinfo.css";

export default props => {
  const headerContainerClass = `FloatRight CenterHeader`;
  const btnInnerHtml = `${props.isLoggedIn ? "Iesi" : "Acceseaza"}`;
  let updateInputValue=""
  return (
    <div className={headerContainerClass}>
    <p>Introdu-ti numele</p>
      <input 
        onChange={updateInputValue}
        label="User..."
        style={{ width: '200px', margin: '20px' }}
      />


    <p>{updateInputValue}</p>
      <button style={{margin: "20px"}} onClick={() => props.buttonHandler(updateInputValue)}>{btnInnerHtml}</button>


    </div >
  );
}

