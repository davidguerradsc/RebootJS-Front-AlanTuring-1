import IconButton from '@material-ui/core/IconButton';
import Contacts from '@material-ui/icons/Contacts';
import React from 'react';
<<<<<<< HEAD

export function ContactListButton({ toggleDrawer }: {toggleDrawer: () => void}) {
  return (
    <IconButton aria-label="contacts" onClick={toggleDrawer}>
      <Contacts fontSize="large" />
    </IconButton>
=======
import { Link } from 'react-router-dom';

export function ContactListButton() {
  return (
    <Link to="/users">
      <IconButton aria-label="contacts">
        <Contacts fontSize="large" />
      </IconButton>
    </Link>
>>>>>>> parent of c1d9f0f... add Drawer
  );
}