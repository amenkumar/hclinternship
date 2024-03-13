
import { Link } from "react-router-dom"

function HeaderBottom(){
    return(
        <div className="d-flex bgDarkest align-items-center justify-content-start textWhite border-0 py-1" style={{fontSize:'0.8em'}}>
            
            <Link to="/productsListing"> {/*this is temporary to access that page for now*/}
            <div className="d-inline-block text-center px-3" style={{borderRight:'solid 1px  rgba(100, 166, 243, 0.75)'}}>
                Categories
            </div>
            </Link>

            <div className="d-inline-block mx-3">
                Headphones
            </div>

            <div className="d-inline-block mx-3">
                Laptops
            </div>

            <div className="d-inline-block mx-3">
                RAM
            </div>

            <div className="d-inline-block mx-3">
                Chargers
            </div>

            <div className="d-inline-block mx-3">
                Mobiles
            </div>

            <div className="d-inline-block mx-3">
                Headphones
            </div>

            <div className="d-inline-block mx-3">
                Laptops
            </div>

            <div className="d-inline-block mx-3">
                RAM
            </div>

            <div className="d-inline-block mx-3">
                Chargers
            </div>

            <div className="d-inline-block mx-3">
                Mobiles
            </div>
        

        </div>
    )
}

export default HeaderBottom
