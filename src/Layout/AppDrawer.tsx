import { makeStyles, Theme, createStyles, Box, Drawer } from '@material-ui/core';
import React from 'react';

interface DrawerProps {
  open: boolean,
  closeDrawer: () => void;
}

export const drawerWidth = 500;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      heigth: '50px',
      textAlign: 'right',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    paper: {
      width: drawerWidth,
    },
    drawerContent: {
      height: 'calc(100% - 50px)',
    }
  })
)

function AppDrawer({ open, closeDrawer }: DrawerProps){
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={closeDrawer}
      classes={{
        paper: classes.paper,
      }}
      >
      <Box>
        <h1>Coucou Toto</h1>
      </Box>
    </Drawer>
  )
}

export default AppDrawer;