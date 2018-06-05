import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStats } from "../../actions/getActions";

class basicStats extends Component {
  componentWillMount() {
    this.props.getStats();
  }

  render() {
    const info = this.props.asyncStats;

    const stats = Object.keys(info).map((key, index) => {
      const myStats = info[key];
      return (
        <ul key={index}>
          <li>xp: {myStats.xp}</li>
          <li>draws: {myStats.draws}</li>
          <li>hits: {myStats.hits}</li>
          <li>wins: {myStats.wins}</li>
          <li>battles: {myStats.battles}</li>
        </ul>
      );
    });

    return <div>{stats}</div>;
  }
}

basicStats.propTypes = {
  getStats: PropTypes.func.isRequired,
  asyncStats: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  asyncStats: state.get.asyncStats
});

export default connect(
  mapStateToProps,
  { getStats }
)(basicStats);
