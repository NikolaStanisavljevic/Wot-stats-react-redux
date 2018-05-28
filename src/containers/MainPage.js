import React, { Component } from 'react'
import axios from 'axios';

export class Main extends Component {

  state = {
        basicStats: [],
        appID : '268da3900b7cb1333a199e12812df394',
        accID : '517377297'
    }
  
   getBasicStats = () => {
    axios.get(`https://api.worldoftanks.eu/wot/account/info/?application_id=${this.state.appID}&account_id=${this.state.accID}`)
      .then(data => console.log([data.data.data[517377297].statistics.all]))
   }

   componentDidMount() {
    axios.get(`https://api.worldoftanks.eu/wot/account/info/?application_id=${this.state.appID}&account_id=${this.state.accID}`)
      .then(res => {
        const stats = [res.data.data[517377297].statistics.all];
        this.setState({ basicStats: stats });
      })
  }

      



  render() {
    const iterator = this.state.basicStats.map({one} => {
      <div>{one}</div>
    })
    return (
      <div>
      {iterator}
      <button onClick={this.getBasicStats}>Get Stats</button>
      </div>
    )
  }
}

export default Main;
