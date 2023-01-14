import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationHeaderStyled from './NavigationHeader.styled';

const NavigationHeader = () => {
  return (
    <NavigationHeaderStyled>
        <nav>
            <ul>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''}to='/dice'>
                        Dice
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''} to='/field'>
                        Field
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''} to='/direction'>
                        Direction
                    </NavLink>
                </li>
            </ul>
        </nav>
    </NavigationHeaderStyled>
  )
}

export default NavigationHeader;