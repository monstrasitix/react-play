// Core
import * as React from 'react';


const Lazy = (importCallback: any) => {
    const WrappedComponent = React.lazy(importCallback);

    return (props) => (
        <React.Suspense fallback="">
            <WrappedComponent {...props} />
        </React.Suspense>
    );
};


export default Lazy;