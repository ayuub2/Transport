var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var request = require("@ombiel/aek-lib/request");
var Bus = require("./bus");
var Train = require("./train");
var Timetable = require("./timetable");
var Time = require("./time");
var busNumber = ["61","62","74","76","87"];



var ContentPage = React.createClass({

  getInitialState: function(){

    return {};
  },

  componentDidMount: function(){this.getData();},

  getData: function(){
    request
    .get('http://transportapi.com/v3/uk/bus/stop/1500IM2468/live.json?')
    .query({
      app_key:"87fa98daa26fb2c5077fb8bdd0bd0264",
      app_id:"62561a7e"
    })
    .end((err, res)=>{
      this.setState({transport:res.body});
    });
  },

  render: function (){
    var page = this.props.page;
    var transport = this.state.transport;
    var busObject = [];
    var allBuses = [];

    if(transport !== undefined){
      var list = transport.departures;
      for(var i in busNumber){
        busObject.push(list[busNumber[i]]);
      }
      for (var j in busObject){
        var length = busObject[j].length;
        for(var x = 0; x < length; x++){
          allBuses.push(busObject[j][x.toString()]);
        }
      }
      console.log(allBuses);
    }
    var contentDisplayed;
    if(page === "bus"){
      contentDisplayed = <Bus buses={allBuses}/>;
    }
    else if(page === "train"){
      contentDisplayed = <Train/>;
    }
    else {
      contentDisplayed = <Timetable/>;
    }
    return (
      <BasicSegment>
        <BasicSegment>
          <Time/>
        </BasicSegment>
        <BasicSegment style={{padding:"0px", top:"-30px"}}>
          {contentDisplayed}
        </BasicSegment>
      </BasicSegment>
    );
  }
});

module.exports = ContentPage;
