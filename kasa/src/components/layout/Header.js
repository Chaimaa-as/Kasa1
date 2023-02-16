// import '../../scss/components/_header.scss';
import '../../scss/styles.scss';
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';


export default function Header() {
  return (
    <div className="header">
      <Logo/>
      <Navigation/>
    </div>
  )
}
