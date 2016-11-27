import { Component } from 'react';
import React from 'react';
import { render } from "react-dom";
import dummyData from './models/dummy-data';
import dummyData2 from './models/dummy-data2';
import './views/styles/styles.scss';

var toggle = true;


class ButtonWrapper extends Component {
    render () {
        return <div><button onClick={this.initialRender.bind(this)}>Update Results</button></div>
    }
    initialRender () {
      var data = toggle ? dummyData : dummyData2;
      this.toggle  = !toggle;

      render(<ResultsWrapper dummyData={data} />, document.getElementById('js-header'));

    }
    componentDidMount () {
      this.setState({'results' : toggle});
    }
}


class ResultsWrapper extends Component {
    constructor(props) {
        this.competitions = [];
        this.setCompetitions(props);
        this.fixtureDate = props.dummyData.results[0].fixtureDate;
        this.competition = props.dummyData.results[0].competition;
        this.ageGroup =  props.dummyData.ageGroup;
    }
    setCompetitions (props) {
        props.dummyData.results.map((groupOfResults) => {
          this.competitions.push(<CompetitionWrapper competition={groupOfResults.competition}
              fixtureDate={groupOfResults.fixtureDate}
              ageGroup={groupOfResults.ageGroup} />);
        });
    }
    render () {
        return (
          <div>
             <ButtonWrapper />
             {this.competitions}
          </div>
        )
    }
}
class CompetitionWrapper extends Component {
    constructor (props) {
        this.i = 0;
        this.rows = [];
        this.setUpRows(props);
    }
    setUpRows (props) {
      if (props.ageGroup) {
          this.rows.push(<NormalHeader key={this.i++} header={props.ageGroup} className="ageGroupHeader" />);
      }

      if (props.fixtureDate) {
          this.rows.push(<NormalHeader key={this.i++} header={props.fixtureDate} className="dateHeader" />);
      }

      props.competition.map((obj) => {
          this.rows.push(<NormalHeader key={this.i++} header={obj.competitionName} />);
          obj.groupOrRound.map((round) => {
              if (round.groupOrRoundName) {
                  this.rows.push(<NormalHeader key={this.i++} header={round.groupOrRoundName} className="dateHeader" />)
              }
              round.result.map((score) => {
                  this.rows.push(<Score score={score} key={this.i++} />)

                    if (score.outcome) {
                         this.rows.push(<NormalRow header={score.outcome} />);
                    }
              });
          });
       });
    }
    render () {
        return (
            <table width="800px">
                <tbody>
                    {this.rows}
                </tbody>
            </table>
          );
    }
}

class NormalHeader extends Component {
    render () {
        return (
          <tr>
              <th className={this.props.className}>{this.props.header}</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        )
    }
}

class NormalRow extends Component {
    render () {
        return (
          <tr>
              <td className={this.props.className}>{this.props.header}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        )
    }
}

class Score extends Component {
    render () {
        return (
          <tr>
            <td className="home" width="32%">{this.props.score.homeTeam}</td>
            <td className="goals" width="5%">{this.props.score.homeGoals}</td>
            <td className="goals" width="5%">{this.props.score.awayGoals}</td>
            <td className="away"  width="32%">{this.props.score.awayTeam}</td>
            <td className="notes">{this.props.score.resultNote}</td>
          </tr>
        )
    }
}

render(<ButtonWrapper />, document.getElementById('js-header'));
