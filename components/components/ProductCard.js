import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function ProductCard(props){

    return(

        <Link to={"/productPage"} className="card col-lg-2 col-md-3 col-sm-4 textWhite pb-3 pt-2 px-1 rounded-1 me-4 mb-4 text-decoration-none">
            <div className="d-flex">
                <div className="bgBlue textWhite px-2 py-0 d-inline-block rounded-2 ">
                    {"₹" + props.price}
                </div>

                <div className="d-inline-block ms-auto mx-1 fw-bold" style={{fontSize:'0.9em'}}>
                    {props.rating}
                    <FontAwesomeIcon icon={faStar} className=' ms-1 textBlue' />
                </div>
            </div>

            <div className="h-100 m-1 d-flex flex-row">
                <img src={props.image} className="cardImage my-auto"></img>
            </div>

            <div className="cardProductName text-center fw-bold">
                {props.name}
            </div>
        </Link>

    )
}

export default ProductCard;