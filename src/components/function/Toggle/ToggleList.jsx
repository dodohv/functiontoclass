import React, { useState } from 'react';

function ToggleList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', isOpen: false },
    { id: 2, name: 'Item 2', isOpen: false },
    { id: 3, name: 'Item 3', isOpen: false },
  ]);

  function toggleItem(id) {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <div onClick={() => toggleItem(item.id)}>
            {item.name}
            {item.isOpen && <span> - open</span>}
          </div>
          {item.isOpen && (
            <ul>
              <li>Subitem 1</li>
              <li>Subitem 2</li>
              <li>Subitem 3</li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ToggleList;