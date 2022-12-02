import React from "react";
import logo1 from "../images/logo1.png"
import { Link } from "react-router-dom";
import "./home.css"

const EditProfile = () => {
  return (
    <div>
     
    
        
            <tr/>
                <div class="lw">
                    <h1><a href="https://www.nairaland.com/#featured" class="g" title="Nairaland, the Nigerian Forum"><img src={logo1} width={265} height={24} alt=""/></a></h1>Welcome, <a href="/racheal12" class="user"></a>: <a href="/editprofile">Edit Profile</a>                    / <a href="/shared"><span title="Posts Shared With Me">SH</span></a> / <a href="/followed"><span title="Followed Topics">FT</span></a> / <a href="/followedboards"><span title="Followed Boards">FB</span></a> / <a href="/likesandshares"><span title="My Likes &amp; Shares">L&amp;S</span></a>                    / <a href="/mentions"><span title="Mentions">MT</span></a> / <a href="/following"><span title="Following">FG</span></a> / <a href="/followers"><span title="Followers">FS</span></a> / <a href="/trending">Trending</a> / <a href="/recent">Recent</a>                    / <a href="/topics">New</a> <br/><b>Stats: </b>2,956,231 members, 7,167,323 topics. <b>Date</b>: Sunday, 13 November 2022 at 07:14 PM / <a href="https://www.nairaland.com/do_logout?m=3032616&amp;session=9D87AB0E8F8AB30A5D3AD3ADC4DA2DDE702AD08759970BFF84DF8CC2036F0EE4">Logout</a>(
                    <a
                        href="https://www.nairaland.com/do_logout?m=3032616&amp;logoutall=1&amp;session=9D87AB0E8F8AB30A5D3AD3ADC4DA2DDE702AD08759970BFF84DF8CC2036F0EE4">all</a>)
                        <p>
                        
                        
                            <form action="/search"> <input type="text" name="q" size="32"/>
                                <input type="submit" name="search" value="Search"/></form>
                           </p>
                           </div>

       
        <h4>Edit My Profile</h4>
        <p> <a href="/">Nairaland Forum</a> / <Link to ="/myprofile">My profile</Link> / Edit My Profile
            </p>
                <form method="POST" action="/do_editprofile" enctype="multipart/form-data"/>
                    <table summary="profile editing form"/>
                        <tr/>
                            <div className="r"><b>Email</b>: antwiracheal077@gmail.com&nbsp;&nbsp;<a href="/changeemail">Change Email</a>
                                <tr/>
                                </div>
                                    <div class="tr"><b>Birthday</b>:
                                        <select name="birthday" size="1">
        <option value = "" selected>-- Day --</option>
        <option value = "1" >1</option>
        <option value = "2" >2</option>
        <option value = "3" >3</option>
        <option value = "4" >4</option>
        <option value = "5" >5</option>
        <option value = "6" >6</option>
        <option value = "7" >7</option>
        <option value = "8" >8</option>
        <option value = "9" >9</option>
        <option value = "10" >10</option>
        <option value = "11" >11</option>
        <option value = "12" >12</option>
        <option value = "13" >13</option>
        <option value = "14" >14</option>
        <option value = "15" >15</option>
        <option value = "16" >16</option>
        <option value = "17" >17</option>
        <option value = "18" >18</option>
        <option value = "19" >19</option>
        <option value = "20" >20</option>
        <option value = "21" >21</option>
        <option value = "22" >22</option>
        <option value = "23" >23</option>
        <option value = "24" >24</option>
        <option value = "25" >25</option>
        <option value = "26" >26</option>
        <option value = "27" >27</option>
        <option value = "28" >28</option>
        <option value = "29" >29</option>
        <option value = "30" >30</option>
        <option value = "31" >31</option></select>
        
                                        <select name="birthmonth" size="1">
        <option value= "" selected>-- Month --</option>
        <option value = "1" >January</option>
        <option value = "2" >February</option>
        <option value = "3" >March</option>
        <option value = "4" >April</option>
        <option value = "5" >May</option>
        <option value = "6" >June</option>
        <option value = "7" >July</option>
        <option value = "8" >August</option>
        <option value = "9" >September</option>
        <option value = "10" >October</option>
        <option value = "11" >November</option>
        <option value = "12" >December</option></select>
                                        <select name="birthyear" size="1">
        <option value = "" selected>-- Year --</option>
        <option value = "1900" >1900</option>
        <option value = "1901" >1901</option>
        <option value = "1902" >1902</option>
        <option value = "1903" >1903</option>
        <option value = "1904" >1904</option>
        <option value = "1905" >1905</option>
        <option value = "1906" >1906</option>
        <option value = "1907" >1907</option>
        <option value = "1908" >1908</option>
        <option value = "1909" >1909</option>
        <option value = "1910" >1910</option>
        <option value = "1911" >1911</option>
        <option value = "1912" >1912</option>
        <option value = "1913" >1913</option>
        <option value = "1914" >1914</option>
        <option value = "1915" >1915</option>
        <option value = "1916" >1916</option>
        <option value = "1917" >1917</option>
        <option value = "1918" >1918</option>
        <option value = "1919" >1919</option>
        <option value = "1920" >1920</option>
        <option value = "1921" >1921</option>
        <option value = "1922" >1922</option>
        <option value = "1923" >1923</option>
        <option value = "1924" >1924</option>
        <option value = "1925" >1925</option>
        <option value = "1926" >1926</option>
        <option value = "1927" >1927</option>
        <option value = "1928" >1928</option>
        <option value = "1929" >1929</option>
        <option value = "1930" >1930</option>
        <option value = "1931" >1931</option>
        <option value = "1932" >1932</option>
        <option value = "1933" >1933</option>
        <option value = "1934" >1934</option>
        <option value = "1935" >1935</option>
        <option value = "1936" >1936</option>
        <option value = "1937" >1937</option>
        <option value = "1938" >1938</option>
        <option value = "1939" >1939</option>
        <option value = "1940" >1940</option>
        <option value = "1941" >1941</option>
        <option value = "1942" >1942</option>
        <option value = "1943" >1943</option>
        <option value = "1944" >1944</option>
        <option value = "1945" >1945</option>
        <option value = "1946" >1946</option>
        <option value = "1947" >1947</option>
        <option value = "1948" >1948</option>
        <option value = "1949" >1949</option>
        <option value = "1950" >1950</option>
        <option value = "1951" >1951</option>
        <option value = "1952" >1952</option>
        <option value = "1953" >1953</option>
        <option value = "1954" >1954</option>
        <option value = "1955" >1955</option>
        <option value = "1956" >1956</option>
        <option value = "1957" >1957</option>
        <option value = "1958" >1958</option>
        <option value = "1959" >1959</option>
        <option value = "1960" >1960</option>
        <option value = "1961" >1961</option>
        <option value = "1962" >1962</option>
        <option value = "1963" >1963</option>
        <option value = "1964" >1964</option>
        <option value = "1965" >1965</option>
        <option value = "1966" >1966</option>
        <option value = "1967" >1967</option>
        <option value = "1968" >1968</option>
        <option value = "1969" >1969</option>
        <option value = "1970" >1970</option>
        <option value = "1971" >1971</option>
        <option value = "1972" >1972</option>
        <option value = "1973" >1973</option>
        <option value = "1974" >1974</option>
        <option value = "1975" >1975</option>
        <option value = "1976" >1976</option>
        <option value = "1977" >1977</option>
        <option value = "1978" >1978</option>
        <option value = "1979" >1979</option>
        <option value = "1980" >1980</option>
        <option value = "1981" >1981</option>
        <option value = "1982" >1982</option>
        <option value = "1983" >1983</option>
        <option value = "1984" >1984</option>
        <option value = "1985" >1985</option>
        <option value = "1986" >1986</option>
        <option value = "1987" >1987</option>
        <option value = "1988" >1988</option>
        <option value = "1989" >1989</option>
        <option value = "1990" >1990</option>
        <option value = "1991" >1991</option>
        <option value = "1992" >1992</option>
        <option value = "1993" >1993</option>
        <option value = "1994" >1994</option>
        <option value = "1995" >1995</option>
        <option value = "1996" >1996</option>
        <option value = "1997" >1997</option>
        <option value = "1998" >1998</option>
        <option value = "1999" >1999</option>
        <option value = "2000" >2000</option>
        <option value = "2001" >2001</option>
        <option value = "2002" >2002</option>
        <option value = "2003" >2003</option>
        <option value = "2004" >2004</option>
        <option value = "2005" >2005</option>
        <option value = "2006" >2006</option>
        <option value = "2007" >2007</option>
        <option value = "2008" >2008</option>
        <option value = "2009" >2009</option>
        <option value = "2010" >2010</option>
        <option value = "2011" >2011</option>
        <option value = "2012" >2012</option>
        <option value = "2013" >2013</option>
        <option value = "2014" >2014</option>
        <option value = "2015" >2015</option>
        <option value = "2016" >2016</option>
        <option value = "2017" >2017</option>
        <option value = "2018" >2018</option>
        <option value = "2019" >2019</option>
        <option value = "2020" >2020</option>
        <option value = "2021" >2021</option>
        <option value = "2022" >2022</option></select>
</div>
        <tr/>
                                            <div class="r"><b>Gender</b>:
                                                <select name="gender" size="1">
         <option value="-" selected></option>
         <option value="m" >Male</option>
         <option value="f" >Female</option>
         </select>
         </div>

         
                                                    
                                                    <div class="tr"><b>Personal text</b>:
                                                        <input type='text'  name='personaltext'  maxlength='255'/>
                                                        <tr/>
                                                        </div>
                                                            <div className="r"><b>Signature</b>:
                                                                <input type='text' placeholder="" maxlength='255'/>
                                                                <tr/>
                                                                </div>
                                                                    <div class="tr"><b>Picture</b>:<input type="file" name="avatar"/>
                                                                        <p><input type="checkbox" name="removeavatar"/> Remove this image
                                                                            <tr/>
                                                                            </p>
                                                                            </div>
                                                                            
                                                                                <div className="r"><b>Location</b>:
                                                                                    <tr/>
                                                                                    </div>
                                                                                        <div class="tr"><b>YIM</b>:  <input type= "text" placeholder=''/>
                                                                                            <tr/>
                                                                                            </div>
                                                                                                < div className="r" ><b>Twitter</b>: <input type= "text" placeholder=''/>
                                                                                                    <tr/>
                                                                                                    </div>
                                                                                                        <div class="tr"><a href="send_confirmation_email_for_account_deactivation?session=9D87AB0E8F8AB30A5D3AD3ADC4DA2DDE702AD08759970BFF84DF8CC2036F0EE4">Deactivate Account</a>
                                                                                                        </div>
                                                                 <br/>                                     


                     <input type="hidden" name="session" value="9D87AB0E8F8AB30A5D3AD3ADC4DA2DDE702AD08759970BFF84DF8CC2036F0EE4"/>
                    <p><input type="submit" value="Update Profile"/>
                    </p>
                <p class="small">(<a href="#up"><b>Go Up</b></a>)
                    </p>
                    

                                                   <div className="lw">
                                                     <p>     
                                                            <form action="/search"> <input type="text" name="q" size="32"/>
                                                                <input type="submit" name="search" value="Search"/></form>Sections: <a href="/politics">politics</a> <a href="/politics/1">(1)</a> <a href="/business">business</a> <a href="/autos">autos</a>                                                            <a href="/autos/1">(1)</a> <a href="/jobs">jobs</a> <a href="/jobs/1">(1)</a> <a href="/career">career</a> <a href="/education">education</a> <a href="/education/1">(1)</a> <a href="/romance">romance</a>                                                            <a href="/computers">computers</a> <a href="/phones">phones</a> <a href="/travel">travel</a> <a href="/sports">sports</a> <a href="/fashion">fashion</a> <a href="/health">health</a> <br/> <a href="/religion">religion</a>                                                            <a href="/celebs">celebs</a> <a href="/tvmovies">tv-movies</a> <a href="/musicradio">music-radio</a> <a href="/literature">literature</a> <a href="/webmasters">webmasters</a> <a href="/programming">programming</a>                                                            <a href="/technologymarket">techmarket</a>
                                                            <p>Links: <a href="/news" title="Page 1, Nairaland News ">(1)</a> <a href="/news/1" title="Page 2, Nairaland News ">(2)</a> <a href="/news/2" title="Page 3, Nairaland News ">(3)</a> <a href="/news/3"
                                                                    title="Page 4, Nairaland News ">(4)</a> <a href="/news/4" title="Page 5, Nairaland News ">(5)</a> <a href="/news/5" title="Page 6, Nairaland News ">(6)</a> <a href="/news/6" title="Page 7, Nairaland News ">(7)</a>                                                                <a href="/news/7" title="Page 8, Nairaland News ">(8)</a> <a href="/news/8" title="Page 9, Nairaland News ">(9)</a> <a href="/news/9" title="Page 10, Nairaland News ">(10)</a>
                                                                <p><b><a href="/" title="Nigerian Forum">Nairaland</a></b> - Copyright &copy; 2005 - 2022 <a href="http://www.seunosewa.com" title="Seun">Oluwaseun Osewa</a>. All rights reserved. See <a href="https://www.nairaland.com/1049481/how-place-targeted-ads-nairaland">How To Advertise</a>.
                                                                    113<br/><b>Disclaimer</b>: Every Nairaland member is <b>solely responsible</b> for <b>anything</b> that he/she <b>posts</b> or <b>uploads</b> on Nairaland.
                                                         </p>
                                                         </p>
                                                         </p>
                                                         </div>
                                                         
                                               
                                                     
                                                    
                                                        
           </div>  
           
          
                                                 
    
  );
};

export default EditProfile;