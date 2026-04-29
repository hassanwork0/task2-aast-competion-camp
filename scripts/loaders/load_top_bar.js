function loadTopBar(current){
    const topBar = document.getElementById("top_bar");

    const homeClass = current === "Home" ? "current" : "";
    const aboutClass = current === "About" ? "current" : "";
    const newsClass = current === "News" ? "current" : "";
    const blogClass = current === "Blog" ? "current" : "";

    topBar.innerHTML += `           
             <div class="top_bar_item">
        <a href="/"><img src="../assets/logo.webp" alt="logo" /></a>
      </div>
      <nav class="navigation">
        <ul class="navigation_list">
          <li class="top_bar_item ${homeClass}"><a href="home.html">Home</a></li>
          <li class="top_bar_item ${newsClass}"><a href="news.html">News & Events</a></li>
          <li class="top_bar_item ${blogClass}"><a href="blog.html">Blog</a></li>
          <li class="top_bar_item ${aboutClass}"><a href="about.html">About</a></li>
        </ul>
      </nav>
      <div class="search_container">
        <h3>Search</h3>
      </div>`;


}