import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src="/heartUT.png" alt="Heart Icon" className="logo" />
                <h2>DeterminationDelta</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Introdução</NavLink></li>
                    <li><NavLink to="/tradutores" className={({isActive}) => isActive ? "active" : ""}>Guia para Tradutores</NavLink></li>
                    <li><NavLink to="/mixers" className={({isActive}) => isActive ? "active" : ""}>Guia para Mixers</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
