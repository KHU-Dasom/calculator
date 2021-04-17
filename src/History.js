import React from "react";

function History({ histories }) {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <Historytable histories={histories} />
    </div>
  );
}

function Historytable({ histories }) {
  const historyValue = histories.map((value, idx) => (
    <tr key={`history-${idx}`}>{value}</tr>
  ));
  console.log(histories);
  return (
    <table className="history__table">
      <tbody>{historyValue}</tbody>
    </table>
  );
}

export default History;
