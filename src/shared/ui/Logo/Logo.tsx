import { Link } from 'react-router-dom'

import logo from '../../assets/logo/logo.png'

export const LogoLink = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  )
}
