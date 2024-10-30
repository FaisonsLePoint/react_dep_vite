import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="navigation">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/autre'>Autre</Link></li>
            </ul>
        </nav>
    );
};

export default Nav