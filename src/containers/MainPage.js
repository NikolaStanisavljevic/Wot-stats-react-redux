import React, { Component } from 'react'
import BasicStats from '../components/BasicStats/BasicStats';
import TankStatsByNation from '../components/TankStats/TankStatsByNation/TankStatsByNation';
import TankStatsByTier from '../components/TankStats/TankStatsByTier/TankStatsByTier';
import TankStatsByClass from '../components/TankStats/TankStatsByClass/TankStatsByClass';
import WinRate from '../components/HistoryStats/WinRate/WinRate';
import WN8 from '../components/HistoryStats/WN8/WN8';
import AvgDmg from '../components/HistoryStats/AvgDmg/AvgDmg';
import MiniList from '../components/MiniList/MiniList';
import VehiclesList from '../components/VehiclesList/VehiclesList';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

export class Main extends Component {
    state = {
      loadingDone : false
    }


    clickHandler = (props) => {
      this.setState({
        loadingDone: true
      })
    }
  render() {
    if(this.state.loadingDone){
      return (
        <div>
          <LoadingScreen clicked={this.clickHandler}/>
        </div>
      )
    } else {
      return (
        <div className='main'>
          <BasicStats />
          <TankStatsByNation />
          <TankStatsByClass />
          <TankStatsByTier />
          <WinRate />
          <WN8 />
          <AvgDmg />
          <MiniList/>
          <VehiclesList/>
        </div>
      )
    }  
  }
}

export default Main;
