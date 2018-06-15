import React from "react";
import "./MiniList.css";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const miniList = props => {
  const data = props.miniList;
  if (!props.resize) { // Make it responsive while resize window
    return (
      <Table responsive hover striped>
        <thead>
          <tr>
            <th>Type</th>
            <th>Battles</th>
            <th>Victories</th>
            <th>Defeats</th>
            <th>WN8</th>
            <th>Win Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key}>
              <td>{row.Type}</td>
              <td>{row.Battles}</td>
              <td>{row.Victories}</td>
              <td>{row.Defeats}</td>
              <td>{row.WN8}</td>
              <td>{row.WR}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    return (
      <Table responsive hover striped>
        <thead>
          <tr>
            <th>Type</th>
            <th>Battles</th>
            <th>WN8</th>
            <th>WR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key}>
              <td>{row.Type}</td>
              <td>{row.Battles}</td>
              <td>{row.WN8}</td>
              <td>{row.WR}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
};

const mapStateToProps = state => ({
  miniList: state.get.miniListByClass
});

export default connect(mapStateToProps, {} )(miniList);
