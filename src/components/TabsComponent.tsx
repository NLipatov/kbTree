import { FC, useState, useRef, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Specie } from '../data';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useDispatch } from 'react-redux';
import { setNewSpecies, setSpecies } from '../store/slice';
import { useSelector } from 'react-redux';

const TabsComponent: FC<any> = (prop): JSX.Element => {
  const speciesData: any = useSelector<any>((state) => state.default.Species);
  const dispatch = useDispatch();

  const [f, setF] = useState<any>(null);
  const [e, setE] = useState<any>(null);
  const [d, setD] = useState<any>(null);

  useEffect(() => {
    if(prop.id !== -1)
    {
      setD(speciesData.filter((x:any)=>x.id === prop.id)[0].description);
      setF(speciesData.filter((x:any)=>x.id === prop.id)[0].facts);
      setE(speciesData.filter((x:any)=>x.id === prop.id)[0].existance);
    }
    
  }, [prop]);
  

  const saveChanges = () => {
    let newSpecies = JSON.parse(JSON.stringify(speciesData));
    
    newSpecies.forEach((s: any) => {
      if(s.id === prop.id)
      {
        s.description = d;
        s.existance = e;
      }
    });
    dispatch(setNewSpecies(newSpecies))
  }


    return(
        <div style={{width: '100%'}}>
          {d !== null ? 
                  <Tabs>
                  <TabList>
                    <Tab>Описание</Tab>
                    <Tab>Факты</Tab>
                    <Tab>Наличие в природе</Tab>
                  </TabList>
      
                  <TabPanel>
                    <EditTextarea value={d} onChange={e => setD(e.target.value)} inputClassName="editable-description" className="editable-description" />
                    <button onClick={saveChanges}>Save</button>
                  </TabPanel>
                  <TabPanel>
                    <ul className="editable-description">
                      {f !== null ? f.map((f: string, index: number) => {
                        return <li key={index}>{f}</li>
                      }) : null}
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <EditTextarea value={e} onChange={e => setE(e.target.value)} inputClassName="editable-description" className="editable-description" />
                    <button onClick={saveChanges}>Save</button>
                  </TabPanel>
                </Tabs>
                :
                <span className='wise-advice'>Выберите любой узел дерева</span>}
        </div>
    );
}

export default TabsComponent;