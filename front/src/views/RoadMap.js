import React, { Component } from 'react';
import DCRoadMapPart1 from "../images/DCRoadMapPart1.gif";
import DCRoadMapPart2 from "../images/DCRoadMapPart2.gif";
import DCRoadMapPart3 from "../images/DCRoadMapPart3.gif";

class RoadMap extends Component {
  render() {
    return(
      <div className='container'>
        <div>
        <h1>RoadMap</h1>
        <br/>
        <div>
          <img src={DCRoadMapPart1} alt ="DecentraCorp RoadMap1" className="DecentraCorpRoadMap1"/>
        </div>
        <div>
          <img src={DCRoadMapPart2} alt ="DecentraCorp RoadMap2" className="DecentraCorpRoadMap2"/>
        </div>
        <div>
          <img src={DCRoadMapPart3} alt ="DecentraCorp RoadMap3" className="DecentraCorpRoadMap2"/>
        </div>
      </div>
    </div>
    );
  }
}

    export default RoadMap;
