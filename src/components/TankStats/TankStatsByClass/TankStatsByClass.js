import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import "./TankStatsByClass.css";
import "chart.piecelabel.js";

const tankStatsByClass = props => {
  const data = props.tankStatsByClass;

  const nations = data.map(res => {
    return res.Class;
  });

  const games = data.map(res => {
    return res.Games;
  });

  const chartData = {
    labels: [...nations],
    datasets: [
      {
        label: ["Battles By Class"],
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
    <div className="class">
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Battles By Class",
            fontSize: 25
          },
          legend: {
            display: false
          },
          plugins: {
            deferred: {
              xOffset: 150, // defer until 150px of the canvas width are inside the viewport
              yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
              delay: 500 // delay of 500 ms after the canvas is considered inside the viewport
            }
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  tankStatsByClass: state.get.tankStats.tankStatsByClass
});

export default connect(mapStateToProps, {})(tankStatsByClass);
