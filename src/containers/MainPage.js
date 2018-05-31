import React, { Component } from 'react'
import BasicStats from '../components/BasicStats/BasicStats';
import TankStatsByNation from '../components/TankStats/TankStatsByNation/TankStatsByNation';
import TankStatsByTier from '../components/TankStats/TankStatsByTier/TankStatsByTier';
import TankStatsByClass from '../components/TankStats/TankStatsByClass/TankStatsByClass';
import WinRate from '../components/HistoryStats/WinRate/WinRate';
import WN8 from '../components/HistoryStats/WN8/WN8';
import AvgDmg from '../components/HistoryStats/AvgDmg/AvgDmg';
import MiniList from '../components/MiniList/MiniList';

export class Main extends Component {
    
  render() {
    return (
      <div>
        <MiniList />
        <TankStatsByClass />
        <TankStatsByNation />
        <TankStatsByTier />
      </div>
    )
  }
}

export default Main;
