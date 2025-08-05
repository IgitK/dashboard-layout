import React from 'react';
import { Collapsible } from '@base-ui-components/react';
import Navigation from '../Navigation/Navigation';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen }) => {
  return (
    <Collapsible.Root open={isOpen} className={styles.sidebar}>
      <Collapsible.Content>
        <Navigation />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Sidebar;
