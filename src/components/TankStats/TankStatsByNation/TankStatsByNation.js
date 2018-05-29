import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import './TankStatsByNation.css';
import 'chart.piecelabel.js';

const tankStatsByNation = props => {

  const data = props.tankStatsByNation;

  const nations = data.map(res => {
    return res.Nation;
  });

  const games = data.map(res => {
    return res.Games;
  });

  const chartData = {
    labels: [...nations],
    datasets: [
      {
        label: ["Battles By Nation"],
        data: [...games],
        backgroundColor: [
          "#2C3E50",
          "#E74C3C",
          "#ECF0F1",
          "#3498DB",
          "#F26101",
          "#FFFF9D",
          "#BEEB9F",
          "#044C29",
          "#413659"
        ]
      }
    ]
  };

  return (
    <div className="chart">
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Battles By Nations",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "right"
          },
          pieceLabel: {
            render: 'percentage'
         }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  tankStatsByNation: state.get.tankStats.tankStatsByNation
});

export default connect(mapStateToProps, {})(tankStatsByNation);
