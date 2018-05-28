import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStats } from '../../actions/getActions';


class basicStats extends Component {

    componentWillMount () {
        this.props.getStats();
    }

  render() {
    const info = this.props.stats;
    const stats = Object.keys(info).map((key, index) => {
        const myStats = info[key]
        console.log(myStats)
        return (
            <ul key={index}>
                <li>xp: {myStats.xp}</li>
                <li>draws: {myStats.draws}</li>
                <li>hits: {myStats.hits}</li>
                <li>wins: {myStats.wins}</li>
                <li>battles: {myStats.battles}</li>
            </ul>
        )
    })
    return (
      <div>
           {stats}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    stats: state.get.stats
})

export default connect(mapStateToProps, { getStats })(basicStats);
