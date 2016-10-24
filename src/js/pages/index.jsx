var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Toolbar = require("./toolbar");
var ContentPage = require("./content");



var IndexPage = React.createClass({
  getInitialState: function(){
    return {page: "bus"};
  },

  handleClick: function(page){

    this.setState({page:page});
    //this.props.sendPage(ev.target.props.buttonCLciked);

  },


  render: function(){
    return (
      <BasicSegment style={{width: "100%", height: "100%", padding: "0px"}}>
        <BasicSegment style={{padding:"0px", height:"90%", width:"100%"}}>
          <ContentPage page={this.state.page}/>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"-40px", width:"100%"}}>
         <Toolbar onClick={this.handleClick} />
        </BasicSegment>
      </BasicSegment>
    );
  }
});
module.exports = IndexPage;
