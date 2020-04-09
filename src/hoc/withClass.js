import React from 'react';

const withClass = (WrapperComponent, className) => {
    //return function component
    return props => (
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    )
};

export default withClass;