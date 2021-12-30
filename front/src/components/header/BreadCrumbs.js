import React from 'react';
import "./Header.scss";

const BreadCrumbs = () => {
    return (
        <div className='breadcrumbs'>
            <span className='breadcrumbs__text'>Inicio</span>
            <i className='bx bx-chevron-right breadcrumbs__icon'/>
            <span className='breadcrumbs__text'>Productos</span>
        </div>
    )
}

export default BreadCrumbs
