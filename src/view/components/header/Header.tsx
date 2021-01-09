import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import styles from './Header.module.scss';

import SideMenu from '../sideMenu/SideMenu';

const Header: React.FC = () => {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item xs={12} sm={4}>
          <div className={styles.left_section}>
            <SideMenu />
            <svg className={styles.logo_icon} viewBox="150.3 22.2 213.7 42.8">
              <path
                fill="#00ff9b"
                d="M150.3 65V22.2L193 65z"
                data-name="Path 1"
              />
              <path
                fill="#003eff"
                d="M193.1 65h-42.8L193 22.2z"
                data-name="Path 2"
              />
              <text
                className={styles.logo_text}
                fill="#432c85"
                font-family="SegoeUI-Semibold,Segoe UI"
                font-size="30"
                font-weight="600"
                letter-spacing=".1em"
                transform="translate(237 56)"
              >
                <tspan x="0" y="0">
                  Minimis
                </tspan>
              </text>
            </svg>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className={styles.middle_section}>
          <h3 className={styles.date_text}>Today</h3>
        </Grid>

        <Grid item xs={12} sm={4} className={styles.right_section}>
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
    </div>
  );
};

export default Header;
