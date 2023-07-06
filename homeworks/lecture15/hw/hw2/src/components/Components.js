import './Components.css'
import React from 'react';

function Components({components}) {

  return (
    <>
      <div className='componentsContent'>
        {components.map((component=>(
          <div className="card" key={component.id} style={{ backgroundColor: component.color, width: '200px', height: '200px' }}>
            <p>Component Name:</p>
            <input type="text" value={component.name}/>
          </div>
        )))}
      </div>
    </>
  )
}

export default Components