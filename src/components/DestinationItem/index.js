// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list-item">
      <img src={imgUrl} className="img" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
