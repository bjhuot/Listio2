import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`
const NavLink = styled.a`
  padding: 10px 20px;
  font-size: 3rem;
  font-variant-caps: all-petite-caps;
`

const Header = (props) => (
  <Nav>
    <Link href="todo">
      <NavLink>Todo</NavLink>
    </Link>
    <Link href="notes">
      <NavLink>Notes</NavLink>
    </Link>
    <Link href="calendar">
      <NavLink>Calendar</NavLink>
    </Link>
  </Nav>
)

export default Header
