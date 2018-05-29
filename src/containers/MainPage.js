import React, { Component } from 'react'
import BasicStats from '../components/BasicStats/BasicStats';
import TankStatsByNation from '../components/TankStats/TankStatsByNation/TankStatsByNation';
import TankStatsByTier from '../components/TankStats/TankStatsByTier/TankStatsByTier';
import TankStatsByClass from '../components/TankStats/TankStatsByClass/TankStatsByClass';

export class Main extends Component {
    
  render() {
    return (
      <div>
        <BasicStats />
        <TankStatsByNation />
        <TankStatsByTier />
        <TankStatsByClass />
      </div>
    )
  }
}

export default Main;
