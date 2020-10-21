import IconButton from '@material-ui/core/IconButton';
import Forum from '@material-ui/icons/Forum';
import React from 'react';
import { DrawerContentString } from '../types';

export function ConversationsButton({ toggleDrawer }: {toggleDrawer: (content: DrawerContentString) => void}) {
  return (
    <IconButton aria-label="contacts" onClick={e => toggleDrawer("conversations")}>
      <Forum fontSize="large" />
    </IconButton>
  );
}