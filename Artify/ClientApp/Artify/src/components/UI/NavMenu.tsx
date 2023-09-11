import { NavLink } from "react-router-dom"


const NavMenu = ({ pages, pathes }: { pages: string[], pathes: string[] }): JSX.Element => {
  return <>
    {pages.map((page) => (
      <NavLink
        key={pages.indexOf(page)}
        to={pathes[pages.indexOf(page)]}
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      >
        {page}
      </NavLink>
    ))}
  </>
}

export default NavMenu