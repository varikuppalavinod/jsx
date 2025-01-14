
import Card from "./Card"
import Button from "./Button"
import classes from "./ErrorModal.Module.css"

const ErrorModal=(props)=>{
    return(
        <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className={classes.modal}>
            <header className={classes.header}><h2>{props.title}</h2></header>
            <div className={classes.content}>
             <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okey</Button>
            </footer>
        </Card>
        
        </div>
    )
}
export default ErrorModal;

/*
import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.Module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
*/