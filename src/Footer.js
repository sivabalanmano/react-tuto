import React from 'react'

const Footer = () => {
  const today =new Date()
  return (
    <main>
    <div>Copyright &copy; {today.getFullYear()}</div>
    </main>
  )
}

export default Footer