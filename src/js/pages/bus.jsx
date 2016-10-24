var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var border = {borderBottom:"1px solid #ddd"};

var Bus = React.createClass({
  render: function () {
    return (
      <BasicSegment style={{fontFamily:"myFirstFont", fontSize:"25px"}} textAlign="center">
        <table style={{width:"100%"}}>
          <tr>
            <th style={border}>Bus</th>
            <th style={border}>Time</th>
          </tr>
          <tr>
            <td style={border}>34</td>
            <td style={border}>12:40</td>
          </tr>
          <tr>
            <td style={border}>34</td>
            <td style={border}>12:40</td>
          </tr>
          <tr>
            <td style={border}>34</td>
            <td style={border}>12:40</td>
          </tr>
          <tr>
            <td style={border}>34</td>
            <td style={border}>12:40</td>
          </tr>
        </table>
      </BasicSegment>
    );
  }
});
module.exports = Bus;
