var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var Bus = require("./bus");
var Train = require("./train");
var Timetable = require("./timetable");

var ContentPage = React.createClass({
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
        {contentDisplayed}
      </BasicSegment>
    );
  }
});

module.exports = ContentPage;
