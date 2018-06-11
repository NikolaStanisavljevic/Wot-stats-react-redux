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
import Scrollspy from 'react-scrollspy';

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
        <div>
          <div className='main'>
            <section id="section-1"><BasicStats /></section>
            <section id="section-2">
              <TankStatsByNation />
              <TankStatsByTier/>
              <TankStatsByClass/>
            </section>
            <section  id="section-3">
              <h3>Tanks Stats Summary by Class:</h3>
              <MiniList resize={this.state.smallTable}/>
            </section>
            <section  id="section-4">
            <h3>History Stats:</h3>
              <WinRate />
              <WN8 />
              <AvgDmg />
            </section>
            <section  id="section-5">
              <VehiclesList resize={this.state.smallTable}/>
            </section> 
          </div>
          <Scrollspy items={ ['section-1', 'section-2', 'section-3','section-4','section-5','section-6','section-7'] } 
                      currentClassName="is-current"
                      offset={ 100 }>
            <li><a href="#section-1">section 1</a></li>
            <li><a href="#section-2">section 2</a></li>
            <li><a href="#section-3">section 3</a></li>
            <li><a href="#section-4">section 4</a></li>
            <li><a href="#section-5">section 5</a></li>
          </Scrollspy>
        </div>
      )
    }  
  }
}

export default Main;
