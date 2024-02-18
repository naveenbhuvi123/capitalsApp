import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryOfCapitol = () => {
    const {activeCapitalId} = this.state
    const getCapital = countryAndCapitalsList.find(
      eachCapitol => eachCapitol.id === activeCapitalId,
    )
    return getCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountryOfCapitol(activeCapitalId)
    return (
      <div className="capitols-app">
        <div className="card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="capitols">
            <select
              className="capitol-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapitol => (
                <option key={eachCapitol.id} value={eachCapitol.id}>
                  {eachCapitol.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="heading ">is capital of which country?</p>
          </div>
          <p className="capitol-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
