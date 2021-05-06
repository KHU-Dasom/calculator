import React from "react";

interface IHistoryProps {
    histories: string[];
}

const History: React.FC<IHistoryProps> = ({histories}: IHistoryProps) => {
  return (
    <div className="history">
      <div className="history__title">History</div>
      <Historytable histories={histories} />
    </div>
  );
}



const Historytable: React.FC<IHistoryProps> = ({ histories } : IHistoryProps) => {
  const historyValue = histories.map((value, idx) => (
    <tr key={`history-${idx}`}>{value}</tr>
  ));
  return (
    <table className="history__table">
      <tbody>{historyValue}</tbody>
    </table>
  );
}

export default History;
