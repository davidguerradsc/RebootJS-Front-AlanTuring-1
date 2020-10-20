import { makeStyles, Theme, createStyles, Box, Drawer, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
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
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <Box>
          <h1>Coucou Toto</h1>
        </Box>
    </Drawer>
  )
}

export default AppDrawer;