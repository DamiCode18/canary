import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    const height = "450";
    const width = "100%";
    const frameborder = "0";
    return (
        <div className="col-md-12 my-4">
            <div className="emdeb-responsive">
                <iframe src={src} width={width} height={height} frameborder={frameborder} style={{border: '0'}} aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    );
};

export default Iframe;