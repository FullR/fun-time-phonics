import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import getLevelMax from "store/helpers/get-level-max";
import toPercent from "util/to-percent";
import PrintPage from "components/print-page";

function ScoreRow({level}) {
  const max = getLevelMax(level.id);
  const levelComplete = level.activityIndex >= max;
  const id = (level.id === "1" || level.id === "2") ? `${level.id}-t` : level.id;
  return (
    <tr>
      <td>{id}</td>
      <td>{levelComplete ? level.score + " / " + max : "Incomplete"}</td>
      <td>{levelComplete ? Math.floor(toPercent(level.score, max)) + "%" : "N/A"}</td>
    </tr>
  );
}

function ScoreTable({levels}) {
  return (
    <div style={{display: "inline-block", width: "50%"}}>
      <table>
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Score</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level) =>
            <ScoreRow key={level.id} level={level}/>
          )}
        </tbody>
        <tfoot/>
      </table>
    </div>
  );
}

export default class AdminPrintPage extends React.Component {
  render() {
    const {user, className} = this.props;
    const classNames = cn("Admin-print-page", className);
    const levelGroups = [
      user.levels.slice(0, 35),
      user.levels.slice(35, 70),
      user.levels.slice(70, 105),
      user.levels.slice(105)
    ];

    return (
      <div {...this.props} className={classNames}>
        <PrintPage>
          <div style={{width: "100%"}}>
            <h1>Fun-Time Phonics User Data</h1>
            <h2>User:&nbsp;&nbsp;{user.name}</h2>
          </div>
          <ScoreTable levels={levelGroups[0]}/>
          <ScoreTable levels={levelGroups[1]}/>
        </PrintPage>
        <PrintPage>
          <div style={{width: "100%"}}>
            <h1>Fun-Time Phonics User Data</h1>
            <h2>User:&nbsp;&nbsp;{user.name}</h2>
          </div>
          <ScoreTable levels={levelGroups[2]}/>
          <ScoreTable levels={levelGroups[3]}/>
        </PrintPage>
      </div>
    );
  }
}
