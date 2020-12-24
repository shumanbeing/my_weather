import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.wrapper}>
      <AppBar className={styles.app_bar} position="static">
        <Grid container className={styles.tool_bar}>
          <Grid item lg={1} md={1} sm={12}>
            <div className={styles.left_section}>
              <IconButton
                edge="start"
                className={styles.menu_button}
                aria-label="menu"
              >
                <MenuIcon className={styles.menu_icon} />
                <div className={styles.app_title}>Photo</div>
              </IconButton>
            </div>
          </Grid>
          <Grid item lg={1} md={1} sm={12}>
            <Typography variant="h6" className={styles.Typography}>
              <h3 className={styles.date_text}>Today</h3>
            </Typography>
          </Grid>
          <Grid item lg={1} md={1} sm={12}>
            <div className={styles.mode_toggle_container}>
              <span className={styles.mode_toggle_text}>Light</span>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                className={styles.toggle_switch}
                // inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span className={styles.mode_toggle_text}>Dark</span>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Header;
