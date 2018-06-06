import React, { Component } from "react";
import PropTypes from "prop-types";
import './BasicStats.css';
import { connect } from "react-redux";
import { getStats } from "../../actions/getActions";
import { Table } from 'reactstrap';
import WotLogo from '../../assets/images/bigBoss_WOTdecal_Web.png';

class basicStats extends Component {
  componentWillMount() {
    this.props.getStats();
  }

  render() {
    const info = this.props.asyncStats;
    

    const stats = Object.keys(info).map((key, index) => {
      
      const myStats = info[key];

      const vicPercent = parseFloat(myStats.wins/ (myStats.battles/100)).toFixed(2);
      const lossPercent = parseFloat(myStats.losses/ (myStats.battles/100)).toFixed(2);
      const avgDamage = parseInt(myStats.damage_dealt/myStats.battles);
      const deaths = parseInt(myStats.battles - myStats.survived_battles);
      const kdRatio = parseFloat(myStats.frags/deaths).toFixed(2);
      const dmgPerGame = parseFloat(myStats.battles/myStats.frags).toFixed(2);
      return (
      <div className='basic'> 
        <img src={WotLogo}></img>
        <h1>Beetlejuice91</h1>
        <Table bordered >
        <h3>Player statistics:</h3>
          <tbody>
            <tr>
              <th>Battles</th>
              <td colSpan='2'>{myStats.battles}</td>
            </tr>
            <tr>
              <th>Victories</th>
              <td>{myStats.wins}</td>
              <td>{vicPercent + '%'}</td>
            </tr>
            <tr>
              <th>Defeats</th>
              <td>{myStats.losses}</td>
              <td>{lossPercent + '%'}</td>  
            </tr>
            <tr>
              <th>Damage</th>
              <td>{myStats.damage_dealt}</td>
              <td>{avgDamage}</td>
            </tr>
            <tr>
              <th>Destroyed</th>
              <td>{myStats.frags}</td>
              <td>{dmgPerGame}</td>
            </tr>
            <tr>
              <th>K/D Ratio</th>
              <td colSpan='2'>{kdRatio}</td>
            </tr>
            <tr>
              <th>Experience</th>
              <td>{myStats.xp}</td>
              <td>{myStats.battle_avg_xp}</td>
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </Table>
      </div>
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
