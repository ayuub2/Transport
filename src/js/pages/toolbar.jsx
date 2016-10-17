var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var {HBox,CBox} = require("@ombiel/aek-lib/react/components/layout");

var Toolbar = React.createClass({


  render: function (){
    return (
      <BasicSegment style={{textAlign:"center"}}>
        <Button style={{width:"95px"}}  onClick={this.props.onClick.bind(null,"bus")}>Bus</Button>
        <Button style={{width:"95px"}}  onClick={this.props.onClick.bind(null,"train")}>Train</Button>
        <Button style={{width:"95px", paddingLeft:"12px"}}  onClick={this.props.onClick.bind(null,"timetable")}>Timetables</Button>
      </BasicSegment>
    );
  }
});
module.exports = Toolbar;
