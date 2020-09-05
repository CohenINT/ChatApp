import React from 'react';
import {getDevices,FetchVideoLocal} from '../common/cameraHandler';




const Contact = () => {

    return (
        <div>
            <p>Contact feed</p>
            <button onClick={FetchVideoLocal}>click me</button>
        </div>
    )


};

export default Contact;