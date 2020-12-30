import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Footer from './Footer';
import styles from './SideMenu.module.scss';

type Anchor = 'left';

const SideMenu = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.slide_menu}>
        <div className={styles.menu_header}>
          <span className={styles.greeting_text}>Welcome Back</span>
          <div className={styles.profile_image_container}>
            <img
              className={styles.profile_image}
              alt="profile-image"
              src="https://avatars3.githubusercontent.com/u/5658460?s=460&v=4"
            />
          </div>
          <div className={styles.account_details}>
            <span className={styles.name_text}>Shu Nakajima</span>
            <span className={styles.email_text}>ABC@gmail.com</span>
          </div>
        </div>

        <div className={styles.menu_body}></div>
        <div className={styles.menu_footer}>
          <Footer />
        </div>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideMenu;
