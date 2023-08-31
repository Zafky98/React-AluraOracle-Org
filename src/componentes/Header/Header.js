import "../Header/Header.css";

function Header(){
    return  <header className="header">
                {/* Enrutar de forma simple para evitar perder la imagen */}
                    <img src="img/Header2.jpg" alt='ORG' />
            </header>
}

export default Header;