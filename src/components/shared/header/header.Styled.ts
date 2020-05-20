import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-image: -moz-linear-gradient( 90deg, rgba(51,51,51,0) 0%, rgba(51,51,51,0.52941) 49%, rgba(51,51,51,0.81961) 100%);
  background-image: -webkit-linear-gradient( 90deg, rgba(51,51,51,0) 0%, rgba(51,51,51,0.52941) 49%, rgba(51,51,51,0.81961) 100%);
  background-image: -ms-linear-gradient( 90deg, rgba(51,51,51,0) 0%, rgba(51,51,51,0.52941) 49%, rgba(51,51,51,0.81961) 100%);
  
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 135px;
  justify-content: space-between;
  color: #fff;
  position:sticky;
`;

export const Logo = styled.span`
  font-size: 2em;
`;

export const Navigation = styled.nav``;

export const NavLinks = styled.ul`
  display: flex;
  font-weight: 300;
  
`;

export const NavLink = styled.li`
  font-size: 1em;
  margin-right: 50px;
  align-self: center;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 26px;
`;