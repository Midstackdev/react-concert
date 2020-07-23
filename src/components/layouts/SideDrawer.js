import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('featured')}>
          Event satrts in
        </ListItem>
        <ListItem button onClick={() => console.log('featured')}>
          Venue info
        </ListItem>
        <ListItem button onClick={() => console.log('featured')}>
          HighLights
        </ListItem>
        <ListItem button onClick={() => console.log('featured')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('featured')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
