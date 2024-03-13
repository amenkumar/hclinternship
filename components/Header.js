
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className=' position-sticky sticky-top'>

        <div className="d-flex bgDarkest align-items-center justify-content-end borderBottomBlue"> 

        <Link exact to={"/"}>
        <div className="me-auto fs-4 textWhite m-2 fw-bold">
            ByteBazaar
        </div>
        </Link>

        <div className='searchGroup me-5 w-100 d-flex bgLightest mx-5 align-items-center'>

            <div className='d-inline-block p-0 align-items-center'>
            <select  className='bgBlue d-inline-block textWhite rounded-1 text-center ms-1 border-0 fw-bold mb-1' style={{fontSize:'0.85em'}}>
                <option value="all">Buy</option>
                <option value="products">Rent</option>
                <option value="users">S-hand</option>
            </select>
            </div>

            <input type='text' className='bgLightest d-inline-block w-100 textLight border-0 px-2'
                placeholder='Search for a product'
            />

            <button className='border-0 bgDarkest'>
                <FontAwesomeIcon icon={faSearch} className='mx-2 py-1 textBlue' />
            </button>

        </div>

        <button className="textWhite me-4 headerIconHeight bg-transparent border-0">
            <FontAwesomeIcon icon={faShoppingCart} />
        </button>

        <Link exact to={"/login"} className='text-decoration-none'>
        <button className='d-flex flex-row m-2 align-items-center orangeBorder px-3 rounded-1 bg-transparent'>
            <div className='textWhite me-2 headerIconHeight'>
            <FontAwesomeIcon icon={faUser} />
            </div>
            <span className='textWhite'>Login</span>
        </button>
        </Link>
        
        </div>

        <HeaderBottom />

        </div>
    )
}

export default Header;
