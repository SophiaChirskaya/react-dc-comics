import Navbar from "./Navbar";


export default function Header(props) {
    return (<header className="header">
        <div className="logo">
            <img src="./src/assets/img/dc-logo.png" alt="" />
        </div>
        <nav>
        <Navbar navLinks={props.navLinks} />
        </nav>
        

        </header>);
}