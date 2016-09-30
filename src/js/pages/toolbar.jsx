var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var {HBox,CBox} = require("@ombiel/aek-lib/react/components/layout");

var Toolbar = React.createClass({
  handleClick: function(page, ev){
    ev.preventDefault();
    this.props.sendPage(page);
  },
  render: function (){
    return (
      <BasicSegment>
        <Button style={{width:"95px"}} onCLick={this.handleClick.bind(this,"bus")}>Bus</Button>
        <Button style={{width:"95px"}} onCLick={this.handleClick.bind(this,"train")}>Train</Button>
        <Button style={{width:"95px", paddingLeft:"12px"}} onCLick={this.handleClick.bind(this,"timetable")}>Timetables</Button>
      </BasicSegment>
    );
  }
});
module.exports = Toolbar;
