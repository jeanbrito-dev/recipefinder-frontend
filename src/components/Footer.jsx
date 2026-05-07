import instagramIcon from '../assets/icons/icon-instagram.svg'
import blueskyIcon from '../assets/icons/icon-bluesky.svg'
import tiktokIcon from '../assets/icons/icon-tiktok.svg'

export default function Footer() {
    return (
        <footer className="flex justify-between px-32 py-6">
            <h1 className="font-nunito">Made with ❤️ and 🥑</h1>
            <ul className="flex gap-4">
                <li>
                    <a href="https://www.instagram.com/">
                        <img src={instagramIcon} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://bsky.app/">
                        <img src={blueskyIcon} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/">
                        <img src={tiktokIcon} alt="" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}