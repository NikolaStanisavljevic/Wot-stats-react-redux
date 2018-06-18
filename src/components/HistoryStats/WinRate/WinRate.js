import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import "./WinRate.css";
import "chartjs-plugin-deferred";

const winRate = props => {
  const data = props.winRate;

  const battles = data.map(res => {
    return res.Battles;
  });

  const wRate = data.map(res => {
    return res.WinRate;
  });

  const chartData = {
    labels: [...battles],
    datasets: [
      {
        label: "Win Rate in %",
        data: [...wRate],
        backgroundColor: "#E74C3C"
      }
    ]
  };

  return (
    <div className="chart wr">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Win Rate / Games played",
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
  winRate: state.get.historyStats.winRate
});

export default connect(mapStateToProps, {})(winRate);
