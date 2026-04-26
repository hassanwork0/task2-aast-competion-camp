footer = `
    <footer class="footer">
        <div class="footer_content">
            <div class="footer_section">
                <img src="../assets/logo.webp" alt="logo" class="footer_logo">
                <p class="footer_tagline">Returning humanity to the Moon</p>
            </div>
            <div class="footer_section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News & Events</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Artemis II</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div class="footer_section">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
            <div class="footer_section">
                <h4>Contact</h4>
                <ul>
                    <li><a href="#">Media Inquiries</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
        </div>
        <div class="footer_bottom">
            <p>&copy; 2026 Artemis II. This is a fan-made NASA clone website for educational purposes.</p>
        </div>
    </footer>`;

function getFooter(){
    //get tag body and append to inner html the footer
    document.body.innerHTML += footer;
    
}