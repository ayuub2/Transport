var React = require("-aek/react");
var {BasicSegment} = require("-components/segment");
var Button = require("@ombiel/aek-lib/react/components/button");
var border = {borderBottom:"1px solid #ddd"};
var buses;
var Bus = React.createClass({
  organiseBuses: function(){
    buses = this.props.buses;
    buses.sort(function (a, b){
      return new Date('1970/01/01 ' + a.best_departure_estimate) - new Date('1970/01/01 ' + b.best_departure_estimate);
    });

  },
  render: function () {
    this.organiseBuses();
    var name = ["00","00","00","00"];
    var time = ["0:00","0:00","0:00","0:00"];
    if(buses.length > 1){
      for(var i = 0; i < time.length; i++){
        name[i] = buses[i].line_name;
        time[i] = buses[i].best_departure_estimate;
      }
    }
    return (
      <BasicSegment style={{fontFamily:"myFirstFont", fontSize:"25px"}} textAlign="center">
        <table style={{width:"100%"}}>
          <tr>
            <th style={border}>Bus</th>
            <th style={border}>Time</th>
          </tr>
          <tr>
            <td style={border}>{name[0]}</td>
            <td style={border}>{time[0]}</td>
          </tr>
          <tr>
            <td style={border}>{name[1]}</td>
            <td style={border}>{time[1]}</td>
          </tr>
          <tr>
            <td style={border}>{name[2]}</td>
            <td style={border}>{time[2]}</td>
          </tr>
          <tr>
            <td style={border}>{name[3]}</td>
            <td style={border}>{time[3]}</td>
          </tr>
        </table>
      </BasicSegment>
    );
  }
});
module.exports = Bus;
