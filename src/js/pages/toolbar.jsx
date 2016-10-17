var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var {HBox,CBox} = require("@ombiel/aek-lib/react/components/layout");

var Toolbar = React.createClass({

  
  render: function (){
    return (
      <BasicSegment>
        <Button style={{width:"95px"}} buttonCLicked="bus" onCLick={this.props.onClick}>Bus</Button>
        <Button style={{width:"95px"}} onCLick={this.props.onClick}>Train</Button>
        <Button style={{width:"95px", paddingLeft:"12px"}} onCLick={this.props.onClick}>Timetables</Button>
      </BasicSegment>
    );
  }
});
module.exports = Toolbar;
