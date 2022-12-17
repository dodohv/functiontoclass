import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

class ToggleList extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1', isOpen: false },
      { id: 2, name: 'Item 2', isOpen: false },
      { id: 3, name: 'Item 3', isOpen: false },
    ],
  };

  toggleItem = id => {
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      }),
    }));
  };

  render() {
    return (
        <div>

      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            <div onClick={() => this.toggleItem(item.id)}>
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
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
        </Accordion>

      </div>

    );
  }
}

export default ToggleList;