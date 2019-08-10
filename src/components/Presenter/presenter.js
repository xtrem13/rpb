import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Presenter=(props)=> {

  /* 
  function PageComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <ChildComponent onClick={increment} count={count} />         
      <h2>count {count}</h2>
      (count should be updated from child)
    </div>
  );
}

const ChildComponent = ({ onClick, count }) => {
  return (
    <button onClick={onClick}>
       Click me {count}
    </button>
  )
};
  */
  
  const count=Math.floor(12/props.columns)
  const allCol=()=>{
    let col="col-md-"+count
    let temp=[];
    for(var i=0; i<props.columns;i++){
     temp.push(<div className={col}>Col</div>)
    }
    return temp;
  }
  const body=allCol()
  return (
    <section style={props.style} >
      <div className="container">
        <div className="row">
          {body}
        </div>
      </div>
    </section>
  );
}

export default Presenter