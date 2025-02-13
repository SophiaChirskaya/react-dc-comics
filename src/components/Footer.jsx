// Footer.jsx
export default function Footer() {
    return (
    <footer className="footer">
        <div className="footer-links">
            <div className="links-wrapper">
                <div>
                    <h4>DC COMICS</h4>
                    <ul>
                        <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">News</a></li>
                    </ul>
                </div>
                <div>
                    <h4>SHOP</h4>
                    <ul>
                    <li><a href="">Shop DC</a></li>
                    <li><a href="">Shop DC Collectibles</a></li>
                    </ul>
                </div>

                <div>
                <h4>DC</h4>
                <ul>
                    <li><a href="">Terms of use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Ad Choices</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Subscriptions</a></li>
                    <li><a href="">Talent Workshop</a></li>
                    <li><a href="">CPSC Certificates</a></li>
                    <li><a href="">Ratings</a></li>
                    <li><a href="">Shop Help</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                </div>

                <div>
                <h4>SITES</h4>
                <ul>
                    <li><a href="">DC</a></li>
                    <li><a href="">Mad Magazine</a></li>
                    <li><a href="">DC Kids</a></li>
                    <li><a href="">DC Universe</a></li>
                    <li><a href="">DC Power Visa</a></li>
                </ul>
                </div>
            </div>

            <div>
                <div className="big-logo">
                    <img src="./src/assets/img/dc-logo-bg.png" alt="" />
                </div>
            </div>

        </div>

        <div className="footer-low">
            <button className="signup-button">SIGN-UP NOW!</button>
            <div className="social-media">
                <span>FOLLOW US</span>
                <a href=""><img src="./src/assets/img/footer-facebook.png" alt="" /></a>
                <a href=""><img src="./src/assets/img/footer-twitter.png" alt="" /></a>
                <a href=""><img src="./src/assets/img/footer-youtube.png" alt="" /></a>
                <a href=""><img src="./src/assets/img/footer-pinterest.png" alt="" /></a>
                <a href=""><img src="./src/assets/img/footer-periscope.png" alt="" /></a>
            </div>
        </div>

    </footer>);
}