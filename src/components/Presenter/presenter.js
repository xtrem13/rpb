import React, { useState } from 'react';

const Presenter=()=> {
  const [uniT, setUnit]=useState('px');
  const [height, setHeight]=useState(25+uniT);
  const [width, setWidth]=useState(25+uniT);
  const [border, setborder]=useState(1+uniT+' dotted black');
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
  return (
    <section >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            section
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presenter