import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import './AvgDmg.css';
import "chartjs-plugin-deferred";

const avgDmg = props => {
  const data = props.avgDmg;

  const battles = data.map(res => {
    return res.Battles;
  });

  const average = data.map(res => {
    return res.Average;
  });

  const chartData = {
    labels: [...battles],
    datasets: [
      {
        label: "Average Damage",
        data: [...average],
        backgroundColor: "#3498DB"
      }
    ]
  };

  return (
    <div className="chart avg">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Average Damage / Games played",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "top"
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
  avgDmg: state.get.historyStats.avgDmg
});

export default connect(mapStateToProps, {})(avgDmg);
