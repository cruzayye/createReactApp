import React, { useState } from 'react'
import './Table.scss';
import { teams } from '../data/data';

const Table = () => {
  const [tab, setTab]= useState('Baseball')
  const [sport, setSport] = useState(teams.baseball)

  const loadTab = () => {
    if (tab === 'Baseball') {
      setSport(teams.baseball)
    } else if ( tab === 'Basketball') {
      setSport(teams.basketball)
    } else {
      setSport(teams.football)
    }
  }

  const clickTab = e => {
    setTab(e.currentTarget.textContent)
    loadTab()
  }

  return (
    <div className='table'>
      <div className='top'>
        <h1>Sports Mascots</h1>
        <ul>
          <li className={tab === 'Baseball' ? 'active' : ''} onClick={clickTab}>Baseball</li>
          <li className={tab === 'Basketball' ? 'active' : ''} onClick={clickTab}>Basketball</li>
          <li className={tab === 'Football' ? 'active' : ''} onClick={clickTab}>Football</li>
        </ul>
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Category</th>
        </tr>
        </thead>
        <tbody>
          {sport.map((sport, i) => {
            return(
              <tr key={i}>
                <td>{sport.name}</td>
                <td>{sport.team}</td>
                <td>{sport.category}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;