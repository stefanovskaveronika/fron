import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={"fixed-top"}>
            <nav className={"navbar navbar-inverse bg-success"}>
                <div className={"container-fluid"}>
                    <div className={"navbar-header"}>
                        <span className={"navbar-brand header-font"}>Library</span>
                    </div>
                    <div className={"navbar-header navbar-right"}>
                        <Link className={"btn btn-dark"} to={"/books"}>Books</Link>
                        <Link className={"btn btn-dark ml-2"} to={"/categories"}>Categories</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
