import React, { Component } from 'react'
import BasicStats from '../components/BasicStats/BasicStats';
import TankStatsByNation from '../components/TankStats/TankStatsByNation/TankStatsByNation';
import TankStatsByTier from '../components/TankStats/TankStatsByTier/TankStatsByTier';

export class Main extends Component {
    
  render() {
    return (
      <div>
        {/* <BasicStats /> */}
        {/* <TankStatsByNation /> */}
        <TankStatsByTier />
      </div>
    )
  }
}

export default Main;
