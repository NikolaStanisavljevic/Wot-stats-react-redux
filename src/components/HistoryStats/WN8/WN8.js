import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import './WN8.css';
import "chartjs-plugin-deferred";

const wn8 = props => {
  const data = props.wn8;

  const battles = data.map(res => {
    return res.Battles;
  });

  const wn8 = data.map(res => {
    return res.WN8;
  });

  const chartData = {
    labels: [...battles],
    datasets: [
      {
        label: "WN8",
        data: [...wn8],
        backgroundColor: "#ECF0F1"
      }
    ]
  };

  return (
    <div className="chart wn8">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "WN8 / Games played",
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
  wn8: state.get.historyStats.wn8
});

export default connect(mapStateToProps, {})(wn8);
