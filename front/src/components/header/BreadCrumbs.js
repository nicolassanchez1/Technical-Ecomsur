import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const BreadCrumbs = () => {
    return (
        <div className='breadcrumbs'>
            <Link to='/'>
            <span className='breadcrumbs__text'>Inicio</span>
            </Link>
            <i className='bx bx-chevron-right breadcrumbs__icon'/>
            <span className='breadcrumbs__text'>Productos</span>
        </div>
    )
}

export default BreadCrumbs
