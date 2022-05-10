import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Content from '../components/header/Content';
import News from '../components/News/News';
import Footer from '../components/footer/Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: `#323c5c`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Content />
      <News />
      {/*<Footer />*/}
    </div>
  );
}