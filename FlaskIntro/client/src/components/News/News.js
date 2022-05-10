import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Newupdates from '../News/Newupdates';
import useWindowPosition from '../News/Movedown';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className="about">
    <h1>Latest News </h1>

  <br/>
  </div>,
    <div className={classes.root} id="place-to-visit">
{/*give output of news feed*/}
        <ImageCard place={Newupdates[2]} checked={checked} />
      <ImageCard place={Newupdates[1]} checked={checked} />
      <ImageCard place={Newupdates[0]} checked={checked} />
    </div>
  );
}