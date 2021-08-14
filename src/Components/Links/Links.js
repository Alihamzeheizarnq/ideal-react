import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ReactSortable } from "react-sortablejs";

export const BasicFunction = (props) => {


  const [state, setState] = useState(props.links);
  useEffect(() => {
      console.log(12)
    document.title = `You clicked f times`;
  },[state]);
  return (
    <ReactSortable tag="ul" list={state} setList={setState}>
      {state.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ReactSortable>
  );
};

let mapStateToProps = state => {
    return {
        links : state.links
    }
}

export default connect(mapStateToProps)(BasicFunction) ;