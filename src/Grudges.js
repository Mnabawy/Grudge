import React from 'react';

import Grudge from './Grudge';
import { GrudgeContext } from './GrudgeContext';

const Grudges = () => {
    const { grudges } = React.useContext(GrudgeContext)

    return (
        <section className="Grudges">
            <h2>grudges ({grudges.length})</h2>
            {grudges.map(grudge => (
                <Grudge key={grudge.id} grudge={grudge} />
            ))}
        </section>
    )
}

export default Grudges;