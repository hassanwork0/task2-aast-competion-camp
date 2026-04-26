function loadTopBar(current){
    const topBar = document.getElementById("top_bar");

    const homeClass = current === "Home" ? "current" : "";
    const aboutClass = current === "About" ? "current" : "";
    const newsClass = current === "News" ? "current" : "";
    const blogClass = current === "Blog" ? "current" : "";

    topBar.innerHTML += `           
                <div class="top_bar_item">
            <img src="../assets/logo.webp" alt="logo">
        </div>
        <div class="top_bar_item">
            <!-- Note #2 the a is not in the h3  -->        
            <h3 class="${homeClass}"><a href="home.html">Home</a></h3>

        </div>
        <div class="top_bar_item">
            <h3 class="${newsClass}"><a href="news.html">News & Events</a></h3>
        </div>
        <div class="top_bar_item">
            <h3 class="${blogClass}"><a href="blog.html">Blog</a></h3>
        </div>
        <div class="top_bar_item">

            <h3 class="${aboutClass}"><a href="about.html">About Us</a></h3>
            
        </div>
        <div class="search_container">
            <h3>Search </h3>
        </div>
        `;


}