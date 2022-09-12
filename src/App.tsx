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
    <div className='content'>
      <div className='tree'>
        <Tree
        data={data}
        height={800}
        width={800}
        margins={{ top: 50, bottom: 0, left: 10, right: 200 }}
        gProps={{
          className: 'node',
          onClick: handleClick,
        }}/>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;