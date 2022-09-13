import { FC, useState, useRef, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Specie } from './data';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useDispatch } from 'react-redux';
import { setNewSpecies, setSpecies } from './store/slice';
import { useSelector } from 'react-redux';

const TabsComponent: FC<Specie> = (prop): JSX.Element => {
  const speciesData: any = useSelector<any>((state) => state.counter.Species);
  const dispatch = useDispatch();

  const rdescription = speciesData.filter((x:any)=>x.name === prop.name)
  console.log('tab:')
  console.log(rdescription)
  let description = `${rdescription}`
  useEffect(() => {
    console.log('render')
    setD(prop.description);
  }, [prop]);
  const [d, setD] = useState(description);
  const saveEdition = () => {
    let newSpecies = JSON.parse(JSON.stringify(speciesData));
    console.log(newSpecies)
    newSpecies.forEach((s: any) => {
      if(s.name === prop.name)
      {
        s.description = d;
      }
    });
    dispatch(setNewSpecies(newSpecies));
  }
    return(
        <div style={{width: '100%'}}>
        <Tabs>
            <TabList>
              <Tab>Описание</Tab>
              <Tab>Факты</Tab>
              <Tab>Наличие в природе</Tab>
            </TabList>

            <TabPanel>
              <EditTextarea value={d} onChange={e => setD(e.target.value)} onBlur={saveEdition} inputClassName="editable-description" className="editable-description" />
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