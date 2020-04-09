import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components'
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

// const StyledDiv = styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0px 2px 3px #ccc;
// padding: 16px;
// text-align: center;
// @media (min-width: 500px): {
//     width: 450px
// }
// `;
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    // ref={(inputEl)=>{this.inputElement= inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name:  PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);