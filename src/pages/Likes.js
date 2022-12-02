import React from 'react'
import logo1 from "../images/logo1.png"
import { Link } from 'react-router-dom'

const Likes = () => {
  return (
    <div>

<div className='lw'>
                    <h1><Link to ="https://www.nairaland.com/" class="g" title="Nairaland, the Nigerian Forum"><img src={logo1}width={246} height={24} alt=''/></Link></h1> 
                    
                    <div className='flex'>
                    Welcome, <>Guest</>: <>
                    <Link to ="/registeronnairaland">Register On Nairaland</Link></> /
                     <Link to= "/login">LOGIN!</Link>               /
                      <Link to ="/trending">Trending</Link>  /
                       <Link to ="/recent">Recent</Link> /
                        <Link to ="/topics">New</Link>
                        

                        <br/><>Stats: </>2,954,507 members, 7,162,530 topics. <>Date</>: Thursday, 10 November 2022 at 06:41 PM
                       </div>
                    <p>
                        <form action="/search"> <input type="text" name="q" size="32"/>
                            <input type="submit" name="search" value="Search"/></form>
                            </p>
                            </div>
       
        
        <h4>My Likes &amp; Shares</h4><a href="/">Nairaland Forum</a> / <a href="/likes">My Likes &amp; Shares</a>
        <p> (of <b>0</b> pages)</p>
            
                
                    <div className='tr'><b>None of your posts have been liked or shared yet.</b></div>
            <p> (of <b>0</b> pages)</p>
                <p class="small">(<a href="#up"><b>Go Up</b></a>)
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

export default Likes