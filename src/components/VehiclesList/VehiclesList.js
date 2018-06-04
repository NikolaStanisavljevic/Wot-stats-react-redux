import React from "react";
import { connect } from "react-redux";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ColorFunctionPercent from './ColorFunctionPercent';
import sortFunction from './SortFunction';
import SortFunction from "./SortFunction";

const vehiclesList = props => {
  const data = props.vehiclesStats;
  const products = [...data];
  const columns = [
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
      sortFunc: (a, b, order, dataField) => {
        const numA = a.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const numB = b.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        if (order === 'asc') {
          return numB - numA;
        }
        return numA - numB; // desc
      }
    },
    {
      dataField: "DPG",
      text: "DPG",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===6 ? 'Damage Per Game' : null},
      sortFunc: SortFunction
    },
    {
      dataField: "ADB",
      text: "ADB",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===7 ? 'Average Damage Blocked' : null},
      sortFunc: SortFunction
    },
    {
      dataField: "AvgSpot",
      text: "Avg Spot",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===8 ? 'Average Spotted Vehicles Per Game' : null},
      sortFunc: SortFunction
    },
    {
      dataField: "KPG",
      text: "KPG",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===9 ? 'Average Destoyed Vehicles Per Game' : null},
      sortFunc: SortFunction
    },
    {
      dataField: "HitRatio",
      text: "Hit Ratio",
      sort: true,
      sortFunc: (a, b, order, dataField) => {
        const numA = a.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const numB = b.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        if (order === 'asc') {
          return numB - numA;
        }
        return numA - numB; // desc
      }
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
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===14 ? 'Custom Skill Metric' : null},
      sortFunc: SortFunction
    }
  ];
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

export default connect(
 mapStateToProps,
  {}
)(vehiclesList);
