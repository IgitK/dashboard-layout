import React from 'react';
import { Collapsible } from '@base-ui-components/react';
import Navigation from '../Navigation/Navigation';

const Sidebar = ({ isOpen }) => {
  return (
    <Collapsible.Root open={isOpen} className={`bg-gray-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
      <Collapsible.Content>
        <Navigation />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Sidebar;
