import React, { Component } from 'react';
import './MainPage.css';
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
      loadingDone : false,
      width : window.innerWidth,
      smallTable : false
    }


    clickHandler = (props) => {
      this.setState({
        loadingDone: true
      })
    }

    componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize() {
    this.setState({smallTable: window.innerWidth <= 760});
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
          <BasicStats/>
          <TankStatsByNation/>
          <TankStatsByTier/>
          <TankStatsByClass/>
          <h3>Tanks Stats Summary by Class:</h3>
          <MiniList resize={this.state.smallTable}/>
          <h3>History Stats:</h3>
          <WinRate/>
          <WN8 />
          <AvgDmg />
          <VehiclesList resize={this.state.smallTable}/>
        </div>
      )
    }  
  }
}

export default Main;
