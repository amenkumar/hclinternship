//will probably have to grab product details through id from link params
import { Button } from "bootstrap";
import boatHeadphones from "../img/boatHeadphones.png"

    var price = 5000;
    var name = "boAt Rockerz 400 Bluetooth Headphones";
    var quantity = 1;
    var category = "Headphones";
    var brand = "boAt";
    var type = "rent";
    var duration = "2 months"

    const buyText = type == "rent" ? "Rent now" : "Buy now";

function ProductPage(props){

    return(
        <div className="container-fluid row mt-4">
            <div className="col-6 borderRightOrange text-center">
                <div>
                    <img src={boatHeadphones} className="productPageImage mx-auto mt-2"></img>
                </div>
                
                <div className="mt-1">
                    Quantity:   
                    <input className="mx-2" type="number" defaultValue={1} style={{width:'3em'}}/>
                </div>
                <button className="bgBlue border-0 textWhite rounded-2 p-2 fw-bold w-50 d-block mx-auto mt-4">Add to Cart</button>
                <button className="bgOrange border-0 textWhite rounded-2 p-2 fw-bold w-50 d-block mx-auto mt-4">{buyText}</button>
            </div>

            <div className="col-6 px-4">
                <div className="fw-bold fs-4">{name}</div>
                <div className="fs-3 ">{"₹" + price}</div>
                <hr/>
                <table className="my-3">
                  <tr>
                    <td className="fw-bold pe-5">Category</td>
                    <td>{category}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold pe-5">Type</td>
                    <td>{type}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Brand </td>
                    <td>{brand}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Renting for</td>
                    <td>{duration}</td>
                  </tr>
                </table> 

                <hr/>
                <div className="fs-4 fw-bold"> Details </div>
                <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur ad i dont' know okay ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
            </div>
        </div>
    
    )
}

export default ProductPage;