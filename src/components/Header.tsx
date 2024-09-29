import Link from "next/link";

export default function Header(){
    return(
        <div className="navbar">
            <ul>
                <Link href={"/"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                <li>About</li>
                </Link>
                <Link href={"/contact"}>
                <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}


