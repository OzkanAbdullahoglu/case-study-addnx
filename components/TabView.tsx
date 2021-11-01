import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

import 'react-tabs/style/react-tabs.css';

import Table from './Table';
import Chart from './Chart';
import { PRIMARY_COLOR, WHITE_COLOR } from '../constants/Colors';

export default function TabView() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tabStyle = (idx: number) =>
    selectedIdx === idx
      ? { backgroundColor: PRIMARY_COLOR, color: WHITE_COLOR }
      : {
          backgroundColor: WHITE_COLOR,
          color: PRIMARY_COLOR,
          border: '1px solid',
          borderRadius: 5,
        };
  return (
    <Tabs
      onSelect={(index: number) => setSelectedIdx(index)}
      style={{ width: '100%', height: '70vh' }}
    >
      <TabList>
        <Tab style={tabStyle(0)}>TABLE</Tab>
        <Tab style={tabStyle(1)}>CHART</Tab>
      </TabList>

      <TabPanel style={{ width: '100%', height: '70vh' }}>
        <Table />
      </TabPanel>
      <TabPanel>
        <Chart />
      </TabPanel>
    </Tabs>
  );
}
