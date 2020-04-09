import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef();    
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http Request
        // const timer =setTimeout(() => {
        //     alert('Saved data to cloud');
        // },1000)
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup');
        }
    },[]);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2');
        return () => {            
            console.log('[Cockpit.js] cleanup 2');
        }           
    });
    const assignedClasses = [];
    let btnClass = '';
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }
    if(props.showPersons){
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            {/* <AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
            {/* </AuthContext.Consumer> */}
        </div>
    );
}

export default React.memo(cockpit);