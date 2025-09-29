import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header className='Header'>
            {/* Logo */}
            <div className='logo'>
                <Link to='/'>
                <span className='Logo1'>G</span>
                <span className='Logo1'>O</span>
                <span className='Logo1'>M</span>
                </Link>
            </div>

            {/* Busca */}
            <div className='seach-bar'>
                <input type='text' placeholder='Buscar "Apartamento"'/>
                <div className='location'>
                    <button className='seach-btn'>
                    <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
};