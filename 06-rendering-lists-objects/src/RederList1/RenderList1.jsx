import './RenderList1.css'
import { assets } from '../assets/assets.js'

const RenderList1 = () => {
  const names = assets.list1;

  return (
    <div className="container">
      <h2 className="listHeading">Rendering List 1</h2>

      {/* Rendering List 1 (person)  */}
      <div className="listItems">
        {names.map((person) => (
          <div className="listCard" key={person}>
            {person}
          </div>
        ))}
      </div>

    </div>
  )
}

export default RenderList1;
