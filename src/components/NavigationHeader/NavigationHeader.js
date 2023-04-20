import React from 'react';
import NavigationHeaderStyled from './NavigationHeader.styled';

const NavigationHeader = ({pages, currentPage, handleNavbarClick}) => {
	const links = pages.map(el => {
		return <li key={el}>
			<span 
				className={currentPage === el ? 'active' : ''} 
				onClick={handleNavbarClick}>
					{el}
			</span>
		</li>
	});

  return (
    <NavigationHeaderStyled>
			<nav>
				<ul>{links}</ul>
			</nav>
    </NavigationHeaderStyled>
  )
}

export default NavigationHeader;