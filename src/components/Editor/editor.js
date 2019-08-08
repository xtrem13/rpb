import React, {useState} from 'react';


const Editor=(props)=> {
  const [colCount, changeColCount]=useState(1)
  props.manip(colCount)
  return (
    <div className="container">
      <br/>
      Editor<br/>
      <label>Number of columns</label>
      <input type="number" value={colCount} onChange={e=>{e.target.value>0?changeColCount(e.target.value):changeColCount(1)}}/>
    </div>
  );
}
export default Editor