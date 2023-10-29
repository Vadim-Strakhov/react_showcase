import React from 'react';

export const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/Vadim-Strakhov'
                    className='brand-logo'
                >
                    React Showcase
                </a>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                >
                    <li>
                        <a href='https://github.com/Vadim-Strakhov'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
