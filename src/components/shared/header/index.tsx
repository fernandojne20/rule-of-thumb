import React, { FunctionComponent } from 'react';
import { HeaderContainer, Logo, Navigation, NavLinks, NavLink, SearchIcon } from './header.Styled';
import search from '../../../assets/search.svg';

interface HeaderProps {

}
export const Header: FunctionComponent<HeaderProps> = () => {

  return (
    <HeaderContainer>
      <Logo>
        Rule of Thumb.
      </Logo>
      <Navigation>
        <NavLinks>
          <NavLink>Past Trials</NavLink>
          <NavLink>How it Works </NavLink>
          <NavLink>Log In/Sign Up</NavLink>
          <SearchIcon src={search} />
        </NavLinks>
      </Navigation>

    </HeaderContainer>
  );
}