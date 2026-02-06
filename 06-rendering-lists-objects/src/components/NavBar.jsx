import './NavBar.css'

const NavBar = () => {

    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="left">
                    <img src='/logo.png' alt="Company Logo" className="logo" />
                    <span className="companyName">
                        Satyaansh Softech Pvt Ltd
                    </span>
                </div>
                <a target='_blank' href="https://www.satyaanshsoftech.com">

                    <button className="visitBtn" >
                        Visit Website
                    </button>
                </a>
            </div>
            {/* Tutorial Heading */}
            <h1 className="mainHeading">
                Rendering List in React JS
            </h1>
        </>
    )
}

export default NavBar
