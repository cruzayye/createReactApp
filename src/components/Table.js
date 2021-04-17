import React, { useEffect, useState } from 'react'
import { teams } from '../data/data';

const Table = props => {
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

  useEffect(() => {
    loadTab()
    console.log('omg', sport)
  }, []);

  return (
    <div className='table'>
      <h1>Sports Mascots</h1>
      <ul>
        <li onClick={clickTab}>Baseball</li>
        <li onClick={clickTab}>Basketball</li>
        <li onClick={clickTab}>Football</li>
      </ul>
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