import React from 'react';
import FootBlock from './FootBlock';
//import icon1 from '../../public/images/icon1.png';
// import icon2 from '../../public/images/icon2.png';
// import icon3 from '../../public/images/icon3.png';
// import icon4 from '../../public/images/icon4.png';


function Footer() {
    return (
        <div className='Footer-blocks'>
            <FootBlock icon="icon1.png" title='Declarative' paraf='React make it painless to create interactive Uls' />
            <FootBlock icon="icon2.png" title='Components' paraf='Build encapsulated components that manage their state' />
            <FootBlock icon="icon3.png" title='Single-Way' paraf='A set of immutable values are passed to the components' />
            <FootBlock icon="icon4.png" title='JSX' paraf='Statically-typed, designed to run on modern browsers.' />
        </div>
    )
}

export default Footer;