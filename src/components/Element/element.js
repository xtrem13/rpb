import React, {Fragment, useState} from 'react';
import Presenter from '../Presenter'
import Editor from '../Editor'

const Element=()=> {
  const [colCount, changeColCount]=useState(1)

  const manipCol=(c)=>{
    changeColCount(c)
  }

  return (
    <Fragment>
      <Presenter columns={colCount}/>
      <Editor manip={manipCol}/>
    </Fragment>
  );
}
export default Element