import { NavLink } from 'react-router-dom';

const Navigate =()=>{
    //const navigate = useNavigate();
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/brand" activeClassName="active">
                            BRAND
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            ABOUT US
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </nav>
      </div>
      
    );
};

export default Navigate;