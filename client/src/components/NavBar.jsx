import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                React Google Book Search
            </a> |
            <a className="nav-link" href="/">
                Search Books
            </a> |

            <a className="nav-link" href="/saved">
                Saved Books
            </a>

        </nav>
    );

}

export default NavBar;
