import IconButton from '@material-ui/core/IconButton';
import Contacts from '@material-ui/icons/Contacts';
import React from 'react';
import { Link } from 'react-router-dom';

export function ContactListButton() {
  return (
    <Link to="/users">
      <IconButton aria-label="contacts">
        <Contacts fontSize="large" />
      </IconButton>
    </Link>
  );
}