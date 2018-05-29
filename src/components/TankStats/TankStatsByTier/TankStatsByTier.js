import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

const tankStatsByTier = props => {

  const data = props.tankStatsByTier;

  const tier = data.map(res => {
    return res.Tier;
  });

  const games = data.map(res => {
    return res.Games;
  });

  const chartData = {
    labels: [...tier],
    datasets: [
      {
        label: ["Battles By Tier"],
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
          "#413659",
          "#FF69B4"
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
            text: "Battles By Tier",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  tankStatsByTier: state.get.tankStats.tankStatsByTier
});

export default connect(mapStateToProps, {})(tankStatsByTier);
