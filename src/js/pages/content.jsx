var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var Bus = require("./bus");
var Train = require("./train");
var Timetable = require("./timetable");

var ContentPage = React.createClass({
  checkTime: function (i){
    if (i < 10) {
       i = "0" + i;
   }
   return i;
  },

  getInitialState: function(){
    return {time: "00:00:00"};
  },

  componentDidMount: function (){
    this.startTime();
  },

  startTime: function (){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
  // add a zero in front of numbers<10
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.setState({time: h + ":" + m + ":" + s});
    setTimeout(function () {
        this.startTime();
    }.bind(this), 500);
  },

  render: function (){
    var page = this.props.page;
    var contentDisplayed;
    if(page === "bus"){
      contentDisplayed = <Bus/>;
    }
    else if(page === "train"){
      contentDisplayed = <Train/>;
    }
    else {
      contentDisplayed = <Timetable/>;
    }
    return (
      <BasicSegment>
        <BasicSegment textAlign="center" style={{top:"-20px",padding:"0px", width:"100%", fontSize:"80px", fontFamily:"myFirstFont"}}>
          {this.state.time}
        </BasicSegment>
        <BasicSegment style={{padding:"0px", top:"-30px"}}>
          {contentDisplayed}
        </BasicSegment>
      </BasicSegment>
    );
  }
});

module.exports = ContentPage;
