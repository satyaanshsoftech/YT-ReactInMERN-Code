import './RenderList3.css'
import { assets } from '../assets/assets.js'

const RenderList3 = () => {
    const fruits = assets.fruits;

    return (
        <section className="container">
            <h2 className="listHeading">Rendering List 3</h2>
            {/* Rendering List 3 (fruits)  */}
            <div className="listItems">
                {fruits.map((fruit) => (
                    <div className="productCard" key={fruit.id}>

                        <div className="productImage">
                            <img
                                src={fruit.image}
                                alt={fruit.name}
                            />
                        </div>

                        <div className="productDetails">
                            <p className="productName">{fruit.name}</p>
                            <p className="productPrice">₹ {fruit.price}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default RenderList3;
