import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Forum } from '@material-ui/icons';
import React from 'react';
import { ContactListButton } from './ContactListButton';
import { ProfileButton } from './ProfileButton';

<<<<<<< HEAD
function AppMenu({ toggleDrawer }: {toggleDrawer: () => void}){
=======
class AppMenu extends React.Component {
  render(){
>>>>>>> parent of c1d9f0f... add Drawer
    return (
      <AppBar position="static" style={{ height: '10vh' }}>
        <Grid container justify="space-between" alignItems="center" style={{ height: '100%' }}>
          <Grid item>
            <Toolbar>
              <Forum fontSize="large" />
              <Typography variant="h3"> Enigma.</Typography>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
<<<<<<< HEAD
              <ContactListButton toggleDrawer={toggleDrawer}/>
=======
              <ContactListButton />
>>>>>>> parent of c1d9f0f... add Drawer
              <ProfileButton />
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    )
<<<<<<< HEAD
=======
  }
>>>>>>> parent of c1d9f0f... add Drawer
}

export default AppMenu;