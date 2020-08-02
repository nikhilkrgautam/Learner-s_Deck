import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Tabs, Table } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  RadialChart,
  LineMarkSeries
} from 'react-vis';

class CyberAlly extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xDomain: [-1, 3],
      yDomain: [-5, 15],
      xAxisOn0: true,
      yAxisOn0: true,
      verticalTickValues: [],
      horizontalTickValues: [0],
      commentsData: [],
      youtubeData: [],
      twitterData: [],
      facebookData: []
    };
  }

  componentDidMount() {
    let youtube = [];
    let twitter = [];
    let facebook = [];
    window.scrollTo(0, 0);
    axios.get('/api/cyberAllyData/allcomments').then(res => {
      // console.log(res.data);
      res.data.forEach((item, i) => {
        if(item.website === 'youtube') {
          youtube.push(item);
        }
        else if(item.website === 'twitter') {
          twitter.push(item);
        }
        else if(item.website === 'facebook') {
          facebook.push(item);
        }
      });
      this.setState(prev => {
        return { youtubeData: youtube, twitterData: twitter, facebookData: facebook }
      });

      this.setState({commentsData: [...res.data]});
    });
  }

  render() {
    const {xDomain, yDomain, verticalTickValues, horizontalTickValues, yAxisOn0, xAxisOn0} = this.state;
    const {commentsData, youtubeData, twitterData, facebookData} = this.state;
    console.log(commentsData, youtubeData.length, twitterData.length, facebookData.length);
    const myData = [
      {angle: youtubeData.length, name: 'Youtube', color: '#FF0000'},
      {angle: twitterData.length, name: 'Twitter', color: '#71C9F8'},
      {angle: facebookData.length, name: 'Facebook', color: '#3B5998'}
    ];
    const classData = [
      {angle: 25, name: 'Identity Attack'},
      {angle: 10, name: 'Insult'},
      {angle: 13, name: 'Obscene'},
      {angle: 20, name: 'Severe Toxicity'},
      {angle: 40, name: 'Sexual Explicit'},
      {angle: 30, name: 'Threat'},
      {angle: 30, name: 'Toxicity'}
    ];
    return (
      <div>
        <Row justify="center" style={{ minHeight: '850px' }}>
          <Col span={22}>
            <Tabs initialValue="1" className='courseTabs' style={{margin: '30px 10px 40px'}}>
              <Tabs.Item label="Radial" value="1">
                <div style={{marginTop: '50px'}}>
                  <Col span={12}>
                    <RadialChart
                      colorType={'literal'}
                      colorDomain={[0, 100]}
                      colorRange={[0, 10]}
                      getLabel={d => d.name}
                      data={myData}
                      labelsRadiusMultiplier={0.8}
                      labelsStyle={{fontSize: 24, fill: '#222'}}
                      showLabels
                      style={{stroke: '#fff', strokeWidth: 2}}
                      width={500}
                      height={500} />
                  </Col>
                  <Col span={12}>
                    <RadialChart
                      getLabel={d => d.name}
                      data={classData}
                      labelsRadiusMultiplier={0.9}
                      labelsStyle={{fontSize: 20, fill: '#222'}}
                      showLabels
                      style={{stroke: '#fff', strokeWidth: 2}}
                      width={500}
                      height={500} />
                  </Col>
                </div>
              </Tabs.Item>
              <Tabs.Item label="Line" value="2">
                <XYPlot width={300} height={300} {...{xDomain, yDomain}}>
                    {!verticalTickValues || verticalTickValues.length ? (
                      <VerticalGridLines tickValues={this.state.verticalTickValues} />
                    ) : null}
                    {!horizontalTickValues || horizontalTickValues.length ? (
                      <HorizontalGridLines tickValues={horizontalTickValues} />
                    ) : null}
                    <XAxis on0={xAxisOn0} />
                    <YAxis on0={yAxisOn0} />
                    <LineSeries
                      data={[
                        {x: -1, y: 10},
                        {x: 0, y: 5},
                        {x: 1, y: 3},
                        {x: 2, y: -5},
                        {x: 3, y: 15}
                      ]}
                    />
                </XYPlot>
              </Tabs.Item>
              <Tabs.Item label="Plot" value="3">
                <XYPlot width={300} height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <LineMarkSeries
                    className="linemark-series-example"
                    style={{
                      strokeWidth: '3px'
                    }}
                    lineStyle={{stroke: 'red'}}
                    markStyle={{stroke: 'blue'}}
                    data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
                  />
                  <LineMarkSeries
                    className="linemark-series-example-2"
                    curve={'curveMonotoneX'}
                    data={[{x: 1, y: 11}, {x: 1.5, y: 29}, {x: 3, y: 7}]}
                  />
                </XYPlot>
              </Tabs.Item>
              <Tabs.Item label="Comments Data" value="4">
                <Table data={commentsData}>
                  <Table.Column prop="comment" label="Comment" />
                  <Table.Column prop="username" label="Username" />
                  <Table.Column prop="website" label="Website" />
                </Table>
              </Tabs.Item>
            </Tabs>

          </Col>
        </Row>
      </div>
    );
  }
}

export default CyberAlly;
