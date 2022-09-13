import React, {useState} from 'react';
import {Tree} from 'react-tree-graph';
import {data, Species, Specie} from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';
import 'react-tabs/style/react-tabs.css';
import TabsComponent from './TabsComponent';
import ImportFileBodyComponent from './ImportFileBodyComponent';
import ExportFileComponent from './ExportFileComponent';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/slice'

const App: React.FC = (props: any) => {
  const count: any = useSelector<any>(state => state.counter.value)
  const treeData: any = useSelector((state: any) => state.counter.treeValue);
  const speciesData: any = useSelector<any>((state) => state.counter.Species);
  // console.log(speciesData)
  const dispatch = useDispatch()

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

    console.log(event.target.classList.add('_active'));

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
        <TabsComponent description={tabSpecie.description}
        existance={tabSpecie.existance}
        facts={tabSpecie.facts}
        name={tabSpecie.name}
        id={tabSpecie.id}/>
      </div>
      <div className='controls'>
        <ImportFileBodyComponent />
        <ExportFileComponent />
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
          <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;