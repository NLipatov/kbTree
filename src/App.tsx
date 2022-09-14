import React, {useState} from 'react';
import {Tree} from 'react-tree-graph';
import { Specie } from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';
import 'react-tabs/style/react-tabs.css';
import TabsComponent from './components/TabsComponent';
import ImportFileBodyComponent from './components/ImportFileBodyComponent';
import ExportFileComponent from './components/ExportFileComponent';
import { useSelector } from 'react-redux'

const App: React.FC = (props: any) => {
  const treeData: any = useSelector((state: any) => state.default.treeValue);
  let speciesData: any = useSelector<any>((state) => state.default.Species);

  const [tabSpecie, setTabSpecie] = useState<Specie | null>(null);
  const handleClick = (event: any, node: any) => {
  const circles = document.getElementsByClassName("node");
  
  for (let i = 0; i < circles.length; i++) {
    if(circles[i].getElementsByTagName("circle")[0].classList.contains("_active"))
    {
      circles[i].getElementsByTagName("circle")[0].classList.remove("_active")
    }
  }

    event.target.classList.add('_active');

    const targetSpecie = speciesData.filter((x: Specie)=> x.name === node);

    setTabSpecie(targetSpecie[0]);
  }

  return (
    <div className='content'>
      <div className='tree'>
        <Tree
        data={treeData}
        height={900}
        width={800}
        margins={{ top: 100, bottom: 100, left: 100, right: 100 }}
        gProps={{
          className: 'node',
          onClick: handleClick,
        }}
        svgProps={{
          viewBox: "50 100 800 600"
        }}/>
      </div>
      <div className="information">
        <TabsComponent 
        id={tabSpecie === null ? -1 : tabSpecie.id}/>
      </div>
      <div className='controls'>
        <ImportFileBodyComponent />
        <ExportFileComponent />
      </div>
    </div>
  );
}

export default App;