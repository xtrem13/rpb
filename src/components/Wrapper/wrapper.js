import React, { useState } from 'react';
import Element from '../Element'
import './wrapper.css'

const Wrapper = () => {
  const [elements, addElement] = useState([0]);

  var body = elements.map(i => {
    return <Element key={i} />
  })
  const addSection = (e) => {
    let newElement = elements[elements.length - 1] + 1
    addElement([...elements, newElement])
  }
  const exportIt = (e) => {
    let title = "index.html"
    let text = document.getElementsByClassName("forExport")[0].innerHTML;
    download(title, text)
  }
  function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');

      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    }
    else {
      pom.click();
    }
  }
  return (
    <div>
      <div className="forExport">
        {body}
      </div>
      <div className="builderController">
        <div className="builderMain">
          <button onClick={addSection}>Add Section</button>
          <button onClick={exportIt}>Export to HTML</button>
        </div>
      </div>
    </div>
  );
}
export default Wrapper