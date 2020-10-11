import React, { useState } from 'react';
import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
    return (
        <div className="Application">
            <NewGrudge />
            <Grudges />
        </div>
    )
}

export default Application;