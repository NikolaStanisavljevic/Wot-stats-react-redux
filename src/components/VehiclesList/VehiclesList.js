import React from "react";
import "./VehiclesList.css";
import { connect } from "react-redux";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ColorFunctionPercent from "./Functions/ColorFunctionPercent";
import SortFunction from "./Functions/SortFunction";
import SortFunctionPercent from "./Functions/SortFunctionPercent";
import ColorFunctionWN8 from "./Functions/ColorFunctionWN8";

const vehiclesList = props => {
  const data = props.vehiclesStats;
  const products = [...data];

  if (!props.small) {
    var columns = [
      {
        dataField: "TankName",
        text: "Tank Name"
      },
      {
        dataField: "Nation",
        text: "Nation",
        sort: true
      },
      {
        dataField: "Type",
        text: "Type",
        sort: true
      },
      {
        dataField: "Tier",
        text: "Tier",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: "Battles",
        text: "Battles",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: `WinRate`,
        text: "Win Rate",
        sort: true,
        // Get custom color of cell based on value
        style: ColorFunctionPercent,
        sortFunc: SortFunctionPercent
      },
      {
        dataField: "DPG",
        text: "DPG",
        sort: true,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 6 ? "Damage Per Game" : null;
        },
        sortFunc: SortFunction
      },
      {
        dataField: "ADB",
        text: "ADB",
        sort: true,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 7 ? "Average Damage Blocked" : null;
        },
        sortFunc: SortFunction
      },
      {
        dataField: "AvgSpot",
        text: "Avg Spot",
        sort: true,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 8 ? "Average Spotted Vehicles Per Game" : null;
        },
        sortFunc: SortFunction
      },
      {
        dataField: "KPG",
        text: "KPG",
        sort: true,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 9 ? "Average Destoyed Vehicles Per Game" : null;
        },
        sortFunc: SortFunction
      },
      {
        dataField: "HitRatio",
        text: "Hit Ratio",
        sort: true,
        sortFunc: SortFunctionPercent
      },
      {
        dataField: "AvgExp",
        text: "Avg Exp",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: "TotalExp",
        text: "Total Exp",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: "Mastery",
        text: "Mastery",
        sort: true
      },
      {
        dataField: "WN8",
        text: "WN8",
        sort: true,
        style: ColorFunctionWN8,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 14 ? "Custom Skill Metric" : null;
        },
        sortFunc: SortFunction
      }
    ];
  } else if (props.mobile) {
     columns = [
      {
        dataField: "TankName",
        text: "Tank Name"
      },
      {
        dataField: "Type",
        text: "Type",
        sort: true
      },
      {
        dataField: "Battles",
        text: "Battles",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: `WinRate`,
        text: "Win Rate",
        sort: true,
        // Get custom color of cell based on value
        style: ColorFunctionPercent,
        sortFunc: SortFunctionPercent
      },
      {
        dataField: "WN8",
        text: "WN8",
        sort: true,
        style: ColorFunctionWN8,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 14 ? "Custom Skill Metric" : null;
        },
        sortFunc: SortFunction
      }
    ];
  } else if (props.small) {
     columns = [
      {
        dataField: "TankName",
        text: "Tank Name"
      },
      {
        dataField: "Nation",
        text: "Nation",
        sort: true
      },
      {
        dataField: "Type",
        text: "Type",
        sort: true
      },
      {
        dataField: "Battles",
        text: "Battles",
        sort: true,
        sortFunc: SortFunction
      },
      {
        dataField: `WinRate`,
        text: "Win Rate",
        sort: true,
        // Get custom color of cell based on value
        style: ColorFunctionPercent,
        sortFunc: SortFunctionPercent
      },
      {
        dataField: "WN8",
        text: "WN8",
        sort: true,
        style: ColorFunctionWN8,
        headerTitle: function callback(column, colIndex) {
          return colIndex === 14 ? "Custom Skill Metric" : null;
        },
        sortFunc: SortFunction
      }
    ];
  } 

  return (
    <BootstrapTable
      keyField="TankName"
      data={products}
      columns={columns}
      pagination={paginationFactory()}
      striped
    />
  );
};

const mapStateToProps = state => ({
  vehiclesStats: state.get.vehiclesStats
});

export default connect(mapStateToProps, {} )(vehiclesList);
