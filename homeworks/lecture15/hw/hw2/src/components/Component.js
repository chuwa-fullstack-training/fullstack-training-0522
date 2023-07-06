import React from 'react'
import { useParams } from 'react-router-dom';

function Component({components}) {

  let {id} = useParams();
  id = Number(id);

  const component = components.find(component=> component.id===id);

  if (!component) {
    return <p>Component not found</p>;
  }
  return (
    <div style={{ backgroundColor: component.color, width: '200px', height: '200px' }}>
      <p>Component Name:</p>
      <input type="text" value={component.name}/>
    </div>
  )
}

export default Component