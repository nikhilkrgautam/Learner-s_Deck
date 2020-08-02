import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Tabs, Table, Link, Grid } from '@zeit-ui/react';
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
  LineMarkSeries,
  BarSeries,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';
import Navbar from './Navbar';

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
      imagesData: [],
      youtubeData: [],
      twitterData: [],
      facebookData: [],
      userData: {},
      barGraphDataYoutube: [],
      barGraphDataTwitter: []
    };
  }

  componentDidMount() {
    let youtube = [];
    let twitter = [];
    let facebook = [];
    let images = [];
    let userDataYoutube = {};
    let userDataTwitter = {};
    let barGraphDataYoutube = [];
    let barGraphDataTwitter = [];
    window.scrollTo(0, 0);
    axios.get('https://ebuzzet.com/api/cyberAllyData/allcomments').then(res => {
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
        else {}

        // if(userData.hasOwnProperty(item.username)) {
        //   userData[item.username]++;
        // } else {
        //   userData[item.username] = 0;
        // }

      });

      this.setState(prev => {
        return { youtubeData: youtube, twitterData: twitter, facebookData: facebook }
      });

      this.setState({commentsData: [...res.data]});

      youtube.forEach((item, i) => {
        if(userDataYoutube.hasOwnProperty(item.username)) {
          userDataYoutube[item.username]++;
        } else {
          userDataYoutube[item.username] = 0;
        }
      });

      twitter.forEach((item, i) => {
        if(userDataTwitter.hasOwnProperty(item.username)) {
          userDataTwitter[item.username]++;
        } else {
          userDataTwitter[item.username] = 0;
        }
      });


      for (const [key, value] of Object.entries(userDataYoutube)) {
        if(value > 0) {
          barGraphDataYoutube.push({x: key, y: value});
        }
      }

      for (const [key, value] of Object.entries(userDataTwitter)) {
        if(value > 0) {
          barGraphDataTwitter.push({x: key, y: value});
        }
      }

      barGraphDataYoutube.sort(function(a, b) {
        var keyA = a.y,
          keyB = b.y;
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });

      barGraphDataTwitter.sort(function(a, b) {
        var keyA = a.y,
          keyB = b.y;
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });

      this.setState({barGraphDataYoutube: barGraphDataYoutube, barGraphDataTwitter: barGraphDataTwitter});
    });


    axios.get('https://ebuzzet.com/api/cyberAllyData/allimages').then(res => {
      res.data.images.forEach((item, i) => {
        item.imgurl = <Link href={item.imgurl} target='_blank' icon color>{item.imgurl}</Link>;
        images.push(item);
      });
      console.log(res.data);
      this.setState({imagesData: images});
    });
  }

  render() {
    const {xDomain, yDomain, verticalTickValues, horizontalTickValues, yAxisOn0, xAxisOn0} = this.state;
    const {commentsData, youtubeData, twitterData, facebookData, imagesData} = this.state;
    // console.log(commentsData);
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
        <Navbar />
        <Row justify="center" style={{marginTop: '50px'}}>
          <Col span={22}>
            <Text h2 style={{fontSize: '30px'}}>Dashboard for Bureau of Police Research and Development</Text>
          </Col>
        </Row>
        <Row justify="center" style={{ minHeight: '850px' }}>
          <Col span={22}>
            <Tabs initialValue="1" className='courseTabs' style={{margin: '30px 10px 40px'}}>
              <Tabs.Item label="Infographics" value="1">
                <Row style={{marginTop: '50px'}}>
                  <Col span={12}>
                    <RadialChart
                      colorType={'literal'}
                      colorDomain={[0, 100]}
                      colorRange={[0, 10]}
                      getLabel={d => d.name}
                      data={myData}
                      labelsRadiusMultiplier={0.8}
                      labelsStyle={{fontSize: 24, fill: '#FFF'}}
                      showLabels
                      style={{stroke: '#fff', strokeWidth: 1}}
                      width={500}
                      height={500} />
                  </Col>
                  <Col span={12}>
                    <RadialChart
                      getLabel={d => d.name}
                      data={classData}
                      labelsRadiusMultiplier={0.9}
                      labelsStyle={{fontSize: 20, fill: '#FFF'}}
                      showLabels
                      style={{stroke: '#fff', strokeWidth: 1}}
                      width={500}
                      height={500} />
                  </Col>
                </Row>
                <Row style={{marginTop: '80px'}}>
                    <XYPlot xType="ordinal" width={1200} height={500} xDistance={200}>
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis />
                      <YAxis />
                      <VerticalBarSeries data={this.state.barGraphDataYoutube} />
                      {/*<LabelSeries data={labelData} getLabel={d => d.x} />*/}
                    </XYPlot>
                </Row>
                <Row style={{marginTop: '80px'}}>
                    <XYPlot xType="ordinal" width={1200} height={500} xDistance={200}>
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis />
                      <YAxis />
                      <VerticalBarSeries data={this.state.barGraphDataTwitter} />
                      {/*<LabelSeries data={labelData} getLabel={d => d.x} />*/}
                    </XYPlot>
                </Row>
              </Tabs.Item>
              {/*<Tabs.Item label="Line" value="2">
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
              </Tabs.Item>*/}
              {/*<Tabs.Item label="Plot" value="3">
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
              </Tabs.Item>*/}
              <Tabs.Item label="Comments Table" value="4">
                <div style={{marginTop: '30px'}}>
                  <Table data={commentsData}>
                    <Table.Column prop="comment" width={1000}><Text style={{fontSize: '22px'}} b>Comment</Text></Table.Column>
                    <Table.Column prop="website"><Text style={{fontSize: '22px'}} b>Website</Text></Table.Column>
                    <Table.Column prop="username"><Text style={{fontSize: '22px'}} b>Username</Text></Table.Column>
                  </Table>
                </div>
              </Tabs.Item>
              <Tabs.Item label="Images Table" value="5">
                <div style={{marginTop: '30px'}}>
                  <Table data={imagesData}>
                    <Table.Column prop="imgurl" width={900}><Text style={{fontSize: '22px'}} b>Image Link</Text></Table.Column>
                    <Table.Column prop="username"><Text style={{fontSize: '22px'}} b>Username</Text></Table.Column>
                    <Table.Column prop="link"><Text style={{fontSize: '22px'}} b>Reverse Image Search</Text></Table.Column>
                  </Table>
                </div>
              </Tabs.Item>
            </Tabs>

          </Col>
        </Row>
      </div>
    );
  }
}

export default CyberAlly;
