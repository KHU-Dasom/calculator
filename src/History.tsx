import React from "react";

function History(props:any):JSX.Element {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <table className="history__table">{props.histories}</table>
    </div>
  );
}

export default History;
