import style from "./Header.module.css";

function Header(){

    return (
        <header className={style.header}>
          <span><img src="bulir_logo.jpeg"/></span>
          <nav>
          <a  class="btn btn-primary" href="#" role="button">Home</a>
          <a  class="btn btn-primary" href="#" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
          </nav>
         
        </header>

    );

}

export default Header;