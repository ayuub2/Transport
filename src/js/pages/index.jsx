var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Toolbar = require("./toolbar");
var ContentPage = require("./content");

var page = "bus";

var IndexPage = React.createClass({

  currentPage: function (currPage){
    page = currPage;
  },
  render: function(){
    return (
      <BasicSegment style={{width: "100%", height: "100%", padding: "0px"}}>
        <BasicSegment style={{height:"90%", width:"100%"}}>
          <ContentPage page={page}/>
        </BasicSegment>
        <BasicSegment style={{position:"absolute", bottom:"-40px", width:"100%"}}>
         <Toolbar sendPage={this.currentPage}/>
        </BasicSegment>
      </BasicSegment>
    );
  }
});
module.exports = IndexPage;
