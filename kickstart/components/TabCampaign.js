import React, { Component } from 'react'
import { Tab, Segment } from 'semantic-ui-react'
import TabDetail from './TabDetail';
import factory from '../ethereum/factory';

const panes = (campaigns) => [
  { menuItem: 'Art', value: 'art' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Design $ Tech',value: 'design-tech' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Comics & illustration', value: 'comics-illustration' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Games', value: 'games' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Food & Craft', value: 'food-craft' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Music', value: 'music' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Publishing', value: 'publishing' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Film', value: 'film' , render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
];

class TabCampaign extends Component {

  state = {
    campaigns : [],
    activeIndex : '0'
  }
  
  handleChange = async (e, data) => {
    let category = data.panes[data.activeIndex].value;
    const campaigns = await factory.methods.getDeployedCampaign(category.toLowerCase()).call();
    this.setState({campaigns : campaigns, activeIndex : data.activeIndex});
    // localStorage.setItem("activeIndex") = data.activeIndex;
  };

  async componentDidMount() {
    let category = this.tab.props.panes[0].menuItem;
    let activeIndex = parseInt(localStorage.getItem("activeIndex")) || 0;
    const campaigns = await factory.methods.getDeployedCampaign(category.toLowerCase()).call();
    this.setState({campaigns : campaigns, activeIndex : activeIndex});
  }

  render() {
    console.log("render", this.state)
    return (
      <div>
        <Tab ref={(tab) => this.tab = tab} panes={panes(this.state)} onTabChange={this.handleChange} renderActiveOnly={true}/>
      </div>
    )
  }

}

// const TabCampaign = () => (
//   <Tab panes={panes} />
// )

export default TabCampaign