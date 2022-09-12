import React from 'react';
import {Tree} from 'react-tree-graph';
import {data} from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';

const App: React.FC = (props: any) => {
  const handleClick = (event: any, node: any) => {
    console.log('handle click ', event);
    console.log('handle click node', node);
    console.log(node)
    alert(`${node} got clicked`);
  }

  return (
    <Tree
	data={data}
	height={700}
	width={1000}
  margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
  gProps={{
    className: 'node',
    onClick: handleClick,
  }}/>
  );
}

export default App;