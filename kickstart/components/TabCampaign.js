import React, { Component } from 'react'
import { Tab, Segment } from 'semantic-ui-react'
import TabDetail from './TabDetail';
import factory from '../ethereum/factory';

const panes = (campaigns) => [
  { menuItem: 'Art', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Design $ Tech', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Comics & illustration', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Games', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Food & Craft', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Music', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Publishing', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
  { menuItem: 'Film', render: () => <TabDetail  campaigns = {campaigns}></TabDetail> },
];

class TabCampaign extends Component {


  state = {
    campaigns : [],
    activeIndex : '0'
  }
  
  handleChange = async (e, data) => {
    let category = data.panes[data.activeIndex].menuItem;
    const campaigns = await factory.methods.getDeployedCampaign(category.toLowerCase()).call();
    this.setState({campaigns : campaigns, activeIndex : data.activeIndex});
   
    // localStorage.setItem("activeIndex") = data.activeIndex;
  };

  async componentDidMount() {
    console.log("didmount")
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