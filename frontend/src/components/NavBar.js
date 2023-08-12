import React from 'react'
import { AppBar, makeStyles, MenuIcon, IconButton, Toolbar, Typography } from '@material-ui/core ';

const userStyles = makeStyles((them)=>{them})
export const NavBar = () => {

    const classes = userStyles()
  return (
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
   
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>  )
}
