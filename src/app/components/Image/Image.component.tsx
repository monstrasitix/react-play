// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


export interface IImageProps {
    src: string;
    fallback?: string;
    [rest: string]: any;
};


const Image: React.FC<IImageProps> = ({ src, fallback, ...rest }) => {
    const [source, setSource] = React.useState(src);


    const handleError = React.useCallback(
        () => setSource(`${fallback}`),
        [src],
    );


    return (
        <img
            {...rest}
            src={source}
            onError={handleError}
        />
    );
};


Image.propTypes = {
    src: PropTypes.string.isRequired,
};


Image.defaultProps = {
    fallback: '',
};


export default Image;