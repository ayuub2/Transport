var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Bus = require("./bus");
var Train = require("./train");
var Timetable = require("./timetable");
var Time = require("./time");
var DataPage = require("./data");

var ContentPage = React.createClass({

  render: function (){
    var page = this.props.page;
    var contentDisplayed;
    var data = DataPage.sendData()
    if(page === "bus"){
      contentDisplayed = <Bus buses={da}/>;
    }
    else if(page === "train"){
      contentDisplayed = <Train/>;
    }
    else {
      contentDisplayed = <Timetable/>;
    }
    dsadas
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
