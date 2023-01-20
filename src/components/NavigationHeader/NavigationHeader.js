import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationHeaderStyled from './NavigationHeader.styled';

const NavigationHeader = props => {
  return (
    <NavigationHeaderStyled>
        <nav>
            <ul>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''}to={`${props.pageRoot}dice`}>
                        Dice
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''} to={`${props.pageRoot}field`}>
                        Field
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? 'active' : ''} to={`${props.pageRoot}direction`}>
                        Direction
                    </NavLink>
                </li>
            </ul>
        </nav>
    </NavigationHeaderStyled>
  )
}

export default NavigationHeader;