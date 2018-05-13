import * as React from 'react'
import { ROUTES } from '../../constants'
import { withStore } from '../../store'
import { Logo } from '../Logo/Logo'
import './SideNav.css'

export let SideNav = withStore(({store}) =>
  <nav className='SideNav'>
    <a onClick={() => store.set('route')('')}>
      <Logo grayscale />
    </a>
    <ul>
      {ROUTES.map(([route, text]) =>
        <li key={route}>
          <a
            className={route === store.get('route') ? '-Active' : ''}
            onClick={() => store.set('route')(route)}
          >{text}</a>
        </li>
      )}
    </ul>
  </nav>
)
