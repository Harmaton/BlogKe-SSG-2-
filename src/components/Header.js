import Link from "next/link";


export default function Header(){
    return(
        <header>
            <div className="container"> 
            <Link className="logowhl"  href= '/' passHref>
                <img className="logo" src="/favicon.ico" alt="" />
                <h2> BlogKe.</h2>
            </Link>

            <div className="link">
            <Link className="onlink" href= '/' passHref> <h4>Home</h4> </Link>
            <Link className="onlink" href= '/contact' passHref> <h4>Contact Us</h4></Link>
            <Link className="onlink" href= '/aboutUs' passHref> <h4>About Us</h4> </Link>
            </div>
            </div>
        </header>
    )
}