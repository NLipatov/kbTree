import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Specie } from './data';

const TabsComponent: FC<Specie> = (prop): JSX.Element => {
    return(
        <div style={{width: '100%'}}>
        <Tabs>
            <TabList>
              <Tab>Описание</Tab>
              <Tab>Факты</Tab>
              <Tab>Наличие в природе</Tab>
            </TabList>

            <TabPanel>
              <p>{prop.description}</p>
            </TabPanel>
            <TabPanel>
              <p>{prop.facts}</p>
            </TabPanel>
            <TabPanel>
              <p>{prop.existance}</p>
            </TabPanel>
          </Tabs>
        </div>
    );
}

export default TabsComponent;