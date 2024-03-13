import ProductCard from "./ProductCard";
import boatHeadphones from "../img/boatHeadphones.png"

function ProductsListingPage(){



    return(
        <div className="container-fluid">
            <div className="ms-1 mt-2 d-flex ">
                <div className="borderRightOrange ps-2 pe-4 mt-2" style={{minWidth: '12%'}}>

                    <div className="pb-2">
                        <div className="textBlue mb-1 Orange"> <b>Type</b></div>
                        <input type="radio" name="type"/> Buy <br/>
                        <input type="radio" name="type"/> Rent <br/>
                        <input type="radio" name="type"/> Second-hand <br/> 
                    </div>
                    
                    <div className="mt-2">
                        <div className="textBlue mb-1"> <b>Category</b></div>
                        <input type="radio" name="category"/> Keyboards <br/>
                        <input type="radio" name="category"/> Mouse <br/>
                        <input type="radio" name="category"/> Headphones <br/>
                        <input type="radio" name="category"/> RAM <br/> 
                        <input type="radio" name="category"/> Chargers <br/>
                        <input type="radio" name="category"/> Mobiles <br/>
                        <input type="radio" name="category"/> Laptops <br/>
                        <input type="radio" name="category"/> Printers <br/>  
                        <input type="radio" name="category"/> Headphones <br/>
                        <input type="radio" name="category"/> RAM <br/> 
                        <input type="radio" name="category"/> Chargers <br/>
                        <input type="radio" name="category"/> Mobiles <br/>
                        <input type="radio" name="category"/> Laptops <br/>
                        <input type="radio" name="category"/> Printers <br/>  
                    </div>
                   
                </div>
                <div className="ms-3">
                    <div className="row">
                        <div className="h4 mt-1 mb-2">Results</div>

                        {Array.from(new Array(10)).map(()=>(
                            <ProductCard name ="boAt Rockerz 400 Bluetooth Headphones"
                            price = {5000} image={boatHeadphones} rating={4.3} className=''/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsListingPage;