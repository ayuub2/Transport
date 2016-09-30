var React = require("-aek/react");
var Container = require("-components/container");
var {VBox} = require("-components/layout");
var {BannerHeader} = require("-components/header");
var {BasicSegment} = require("-components/segment");
var {AekReactRouter, RouterView} = require("-components/router");
var IndexPage = require("./pages/index");

var router = new AekReactRouter();

var style = {
  width: "100%",
  height: "100%"
};

var Screen = React.createClass({



  render:function() {


    return (
      <Container style={style}>
        <VBox style={style}>
          <BasicSegment style={style}>
            <RouterView router={router}>
                <IndexPage path="/"/>
            </RouterView>
          </BasicSegment>
        </VBox>
      </Container>
    );

  }

});

React.render(<Screen/>,document.body);
