import React from 'react';

export default ({ valueChange, getData }) => {
  return (
    <div>
      <p>URL</p>
      <input onChange={e => valueChange('url', e.target.value)} type="text"/>
      <button onClick={() => getData()}>Go</button>
    </div>
  );
}
