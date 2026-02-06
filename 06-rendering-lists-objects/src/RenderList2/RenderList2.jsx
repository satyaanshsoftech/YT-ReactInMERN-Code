import './RenderList2.css'
import { assets } from '../assets/assets.js'

const RenderList2 = () => {
  const schoolMembers = assets.schoolMembers;

  return (
    <section className="container">
      <h2 className="listHeading">Rendering List 2</h2>

      {/* Rendering List 2 (School Members)  */}
      <div className="listItems">
        {schoolMembers.map((person) => (
          <div className="memberCard" key={person.name}>
            <p className="memberName">{person.name}</p>
            <p className="memberPost">{person.post}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default RenderList2;
