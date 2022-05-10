import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Collapse } from '@material-ui/core';
import "./header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },


  colorText: {
    color: '#fe8033',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#D1CFB2',
    fontSize: '4.5rem',
    fontFamily: 'Nunito',
  },


}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">



      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            ASK ME<span className={classes.colorText}> PHONE</span>
          </h1>
<div className="logo">
                <img src="images/logo_transparent.png" height={300} width={315}/>
            </div>

        </div>
      </Collapse>
    </div>
  );
}
