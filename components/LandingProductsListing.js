import ProductCard from "./ProductCard";
import boatHeadphones from "../img/boatHeadphones.png"

function LandingProductsListing(){

    return(
        <div className="px-3 container-fluid">

            <div className="p-2 bgDarker">

                <div className="d-flex mb-2">
                    <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Buy</h3>
                    <div className="textOrange d-inline-block ms-auto me-2"><u>View all</u></div>
                </div>
                
                <div className="row">
                    {Array.from(new Array(5)).map(()=>(
                        <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                        price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                    ))}
                </div> 
            </div>

            <div className="p-2 ">

                <div className="d-flex mb-2">
                    <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Rent</h3>
                    <div className="textOrange d-inline-block ms-auto me-2"><u>View all</u></div>
                </div>
                
                <div className="row">
                    {Array.from(new Array(5)).map(()=>(
                        <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                        price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                    ))}
                </div> 
            </div>

            <div className="p-2 bgDarker">

                <div className="d-flex mb-2">
                    <h3 className="borderBottomOrange d-inline-block pb-1 mb-2">Buy second-hand</h3>
                    <div className="textOrange d-inline-block ms-auto me-2"><u>View all</u></div>
                </div>
                
                <div className="row">
                    {Array.from(new Array(5)).map(()=>(
                        <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                        price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                    ))}
                </div> 
            </div>
        </div>

    )
}

export default LandingProductsListing;