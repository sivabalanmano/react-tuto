import React, { useContext } from 'react'
import DataContaxt from './contaxt/DataContaxt'


const Header = ({title}) => {
  const {width}=useContext(DataContaxt)
  return (
    <header>
    <div>{title}</div>
    {width < 768 ? 'M' : width < 992 ? 'T':"L"}
    </header>
  )
}

export default Header