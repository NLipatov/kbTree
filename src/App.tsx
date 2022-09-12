import React, {useState} from 'react';
import {Tree} from 'react-tree-graph';
import {data, Species, Specie} from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsComponent from './TabsComponent';

const App: React.FC = (props: any) => {
  const chooseSpecieAssumption: string = "Выберите вид в дереве";
  const [tabSpecie, setTabSpecie] = useState<Specie>({id: -1, description: chooseSpecieAssumption, existance: chooseSpecieAssumption, facts: [`${chooseSpecieAssumption}`], name: chooseSpecieAssumption});
  const handleClick = (event: any, node: any) => {
    const circles = document.getElementsByClassName("node");
    for (let i = 0; i < circles.length; i++) {
      if(circles[i].getElementsByTagName("circle")[0].classList.contains("_active"))
      {
        circles[i].getElementsByTagName("circle")[0].classList.remove("_active")
      }
    }

    console.log(event.target.classList.add('_active'))
    // console.log('handle click ', event);
    // console.log('handle click node', node);

    const targetSpecie = Species.filter(x=> x.name === node);
    // console.log(targetSpecie[0] === undefined)
    // console.log(targetSpecie[0] !== undefined ? targetSpecie[0].facts : 'N/A')

    setTabSpecie(targetSpecie[0]);

    // console.log(tabSpecie);
    
    // alert(`${node} got clicked`);
  }

  return (
    <div className='content'>
      <div className='tree'>
        <Tree
        data={data}
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
        <TabsComponent description={tabSpecie.description}
        existance={tabSpecie.existance}
        facts={tabSpecie.facts}
        name={tabSpecie.name}
        id={tabSpecie.id}/>
      </div>
    </div>
  );
}

export default App;