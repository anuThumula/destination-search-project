// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-cont">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input">
            <input
              className="search"
              type="search"
              placeholder="search"
              onChange={this.onSearchInput}
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-img"
              alt="search icon"
            />
          </div>

          <div className="country-list">
            <ul className="ul">
              {searchResult.map(eachItem => (
                <DestinationItem
                  key={eachItem.id}
                  destinationsList={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
