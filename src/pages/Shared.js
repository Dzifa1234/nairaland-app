import React from 'react'
import { Link } from 'react-router-dom'

const Shared = () => {
  return (
    <div>
         <div class="lw">
                    <h1><a href="https://www.nairaland.com/" class="g" title="Nairaland, the Nigerian Forum"><img src="/static/logo1.png" width="246" height="24" alt=''/></a></h1>Welcome, :

                    <Link to= "/editprofile">EditProfile!</Link> 

                                       / <Link to ="/shared"><span title="Posts Shared With Me">SH</span></Link> / 
                                       <Link to ="/followed"><span title="Followed Topics">FT</span></Link> /
                                        <Link to ="/followedboards"><span title="Followed Boards">FB</span></Link> /
                                         <Link href="/likes"><span title="Likes">L&amp;S</span></Link>                    
                                         / <Link to ="/mentions"><span title="Mentions">MT</span></Link> / 
                                         <Link to ="/following"><span title="Following">FG</span></Link> / 
                                         <Link to ="/followers"><span title="Followers">FS</span></Link> / 
                                         <Link to ="/trending">Trending</Link> /
                                          <Link to ="/recent">Recent</Link>                    / 
                                          <Link to ="/topics">New</Link> <br/><b>Stats: </b>2,958,092 members, 7,173,317 topics. <b>Date</b>: Thursday, 17 November 2022 at 10:58 AM / <a href="https://www.nairaland.com/do_logout?session=3C654A71F75BEE5DAD68EA20F687886DE56B390E2479BB3C934DE162CE180095&amp;m=3032616">Logout</a>(
                    <a
                        href="https://www.nairaland.com/do_logout?session=3C654A71F75BEE5DAD68EA20F687886DE56B390E2479BB3C934DE162CE180095&amp;m=3032616&amp;logoutall=1">all</a>)
                        <p>
                            <form action="/search"> <input type="text" name="q" size="32"/>
                                <input type="submit" name="search" value="Search"/></form>
                                </p>
                                </div>
                
                    
                        
                        
                
                                
                            
                                
        
        <h4>Posts Shared With Me</h4><a href="/">Nairaland Forum</a> / <a href="/shared">Posts Shared With Me</a>
        <p> (of <b>0</b> pages)</p>
            
            
                    <div className='tr'><b>You have no shared posts yet</b></div>
            <p> (of <b>0</b> pages)
                <p class="small">(<a href="#up"><b>Go Up</b></a>)
                </p>
                </p>

                <div class="lw">
                                                        <p>
                                                            <form action="/search"> <input type="text" name="q" size="32"/>
                                                                <input type="submit" name="search" value="Search"/></form>Sections: <a href="/politics">politics</a> <a href="/politics/1">(1)</a> <a href="/business">business</a> <a href="/autos">autos</a>                                                            <a href="/autos/1">(1)</a> <a href="/jobs">jobs</a> <a href="/jobs/1">(1)</a> <a href="/career">career</a> <a href="/education">education</a> <a href="/education/1">(1)</a> <a href="/romance">romance</a>                                                            <a href="/computers">computers</a> <a href="/phones">phones</a> <a href="/travel">travel</a> <a href="/sports">sports</a> <a href="/fashion">fashion</a> <a href="/health">health</a> <br/> <a href="/religion">religion</a>                                                            <a href="/celebs">celebs</a> <a href="/tv-movies">tv-movies</a> <a href="/music-radio">music-radio</a> <a href="/literature">literature</a> <a href="/webmasters">webmasters</a> <a href="/programming">programming</a>                                                            <a href="/techmarket">techmarket</a>
                                                            <p>Links: <a href="/news" title="Page 1, Nairaland News ">(1)</a> <a href="/news/1" title="Page 2, Nairaland News ">(2)</a> <a href="/news/2" title="Page 3, Nairaland News ">(3)</a> <a href="/news/3"
                                                                    title="Page 4, Nairaland News ">(4)</a> <a href="/news/4" title="Page 5, Nairaland News ">(5)</a> <a href="/news/5" title="Page 6, Nairaland News ">(6)</a> <a href="/news/6" title="Page 7, Nairaland News ">(7)</a>                                                                <a href="/news/7" title="Page 8, Nairaland News ">(8)</a> <a href="/news/8" title="Page 9, Nairaland News ">(9)</a> <a href="/news/9" title="Page 10, Nairaland News ">(10)</a>
                                                                <p><b><a href="/" title="Nigerian Forum">Nairaland</a></b> - Copyright &copy; 2005 - 2022 <a href="http://www.seunosewa.com" title="Seun">Oluwaseun Osewa</a>. All rights reserved. See <a href="https://www.nairaland.com/1049481/how-place-targeted-ads-nairaland">How To Advertise</a>.
                                                                    113<br/><b>Disclaimer</b>: Every Nairaland member is <b>solely responsible</b> for <b>anything</b> that he/she <b>posts</b> or <b>uploads</b> on Nairaland.
                                                         </p>
                                                         </p>
                                                         </p>
                                                         </div>
                
                    
    </div>
  )
}

export default Shared