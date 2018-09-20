import React from 'react'
import { Tab } from 'semantic-ui-react'
import TabDetail from './TabDetail';

const panes = [
  { menuItem: 'Arts', render: () => <TabDetail category={'Art'} type={'1'}></TabDetail> },
  { menuItem: 'Design $ Tech', render: () => <TabDetail category={'Design $ Tech'} type={2}></TabDetail> },
  { menuItem: 'Comics & illustration', render: () => <TabDetail category={'Comics & illustration'}></TabDetail> },
  { menuItem: 'Games', render: () => <TabDetail category={'Games'}></TabDetail> },
  { menuItem: 'Food & Craft', render: () => <TabDetail category={'Food & Craft'}></TabDetail> },
  { menuItem: 'Music', render: () => <TabDetail category={'Music'}></TabDetail> },
  { menuItem: 'Publishing', render: () => <TabDetail category={'Publishing'}></TabDetail> },
  { menuItem: 'Film', render: () => <TabDetail category={'Film'}></TabDetail> },
  
]

const TabCampaign = () => (
  <Tab panes={panes} />
)

export default TabCampaign