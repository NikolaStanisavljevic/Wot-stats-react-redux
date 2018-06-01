import React from "react";
import { connect } from "react-redux";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";

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
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "Battles",
      text: "Battles",
      sort: true,
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: `WinRate`,
      text: "Win Rate",
      sort: true,
      // Get custom color of cell based on value
      style: function callback(cell, row, rowIndex, colIndex) { 
          const cellValue = cell.replace('%', '');
          if(cellValue< 46) {
              return { backgroundColor: '#930D0D' }
          } else if ( cellValue === 46 ){
            return { backgroundColor: '#CD3333' }
          } else if ( cellValue === 47 ){
            return { backgroundColor: '#CC7A00' }
          } else if ( cellValue >= 48 && cellValue < 50 ){
            return { backgroundColor: '#CC7A00' }
          } else if ( cellValue >= 50 && cellValue < 52 ){
            return { backgroundColor: '#849B24' }
          } else if ( cellValue >= 52 && cellValue < 54 ){
            return { backgroundColor: '#4D7326' }
          } else if ( cellValue >= 54 && cellValue < 56 ){
            return { backgroundColor: '#4099BF' }
          } else if ( cellValue >= 56 && cellValue < 60 ){
            return { backgroundColor: '#3972C6' }
          } else if ( cellValue >= 60 && cellValue < 65 ){
            return { backgroundColor: '#793DB6' }
          } else if ( cellValue >= 65){
            return { backgroundColor: '#401070' }
          }
      },
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
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "ADB",
      text: "ADB",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===7 ? 'Average Damage Blocked' : null},
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc 
      }
    },
    {
      dataField: "AvgSpot",
      text: "Avg Spot",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===8 ? 'Average Spotted Vehicles Per Game' : null},
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "KPG",
      text: "KPG",
      sort: true,
      headerTitle: true,
      headerTitle: function callback(column, colIndex) { return colIndex===9 ? 'Average Destoyed Vehicles Per Game' : null},
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
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
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "TotalExp",
      text: "Total Exp",
      sort: true,
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
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
      sortFunc: (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
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
