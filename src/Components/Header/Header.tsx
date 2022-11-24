import { DivContainer } from "./HeaderCSS"

const Header = () => {

    return (
        <DivContainer>
            <nav className="navbar">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                          <input className="form-control" type="search" placeholder="Busca por um Produto" aria-label="Search"/>
                          <button className="btn" type="submit">Search</button>
                     </form>
                </div>
            </nav>
        </DivContainer>
    )
}

export default Header;