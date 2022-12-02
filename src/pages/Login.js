import React from 'react'
import logo1 from "../images/logo1.png"

const Login = () => {
  return (
    <div>
         <div  class="lw">
                    <h1><a href="https://www.nairaland.com/" class="g" title="Nairaland, the Nigerian Forum"><img src={logo1} width={246} height={24} alt=''/></a></h1> Welcome, <b>Guest</b>: <b><a href="/registeronnairaland">Register On Nairaland</a></b> / <a href="/login">LOGIN!</a>                    / <a href="/trending">Trending</a> / <a href="/recent">Recent</a> / <a href="/topics">New</a><br/><b>Stats: </b>2,958,720 members, 7,175,341 topics. <b>Date</b>: Friday, 18 November 2022 at 03:24 PM
                    <p>
                        <form action="/search"> <input type="text" name="q" size="32"/>
                            <input type="submit" name="search" value="Search"/></form>
                            </p>
                            </div>
        
        <h2>Login To Nairaland</h2>
        <p></p>

        <div className='tr'>Login With Password:</div>
                        <tr/>
                            <div class="r">
                                <form method="POST" action="/do_login">
                                    User Name: <input name="name" type="text"/> &nbsp; Password: <input name="password" type="password"/>
                                    <input type="submit" value="Login"/><input name="redirect" type="hidden" value=""/>
                                </form>
                                </div>
                            <br/>
                            
                                <div className='tr'>Reset Your Password:</div>
                        <tr/>
                            <div  class="r">Please enter your email address and a link allowing you to reset your password will be emailed to you.
                                <p>
                                    <form method="POST" action="/do_resetcode">
                                        E-mail: <input name="email" type="text"/>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                    </p>
                                    </div>


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

export default Login