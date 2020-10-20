import IconButton from '@material-ui/core/IconButton';
import Contacts from '@material-ui/icons/Contacts';
import React from 'react';

export function ContactListButton({ toggleDrawer }: {toggleDrawer: () => void}) {
  return (
    <IconButton aria-label="contacts" onClick={toggleDrawer}>
      <Contacts fontSize="large" />
    </IconButton>
  );
}