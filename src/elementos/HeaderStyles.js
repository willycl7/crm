import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #36D13C;
    }
  }
`;
