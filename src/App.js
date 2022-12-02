import React from 'react'
import Home from './pages/Home'
import TvMovies from './pages/TvMovies'
import Entertainment from './pages/Entertainment'
import EditProfile from './pages/EditProfile'
import NairaLandAds from './pages/NairaLandAds'
import RegisterOnNairaLand from './pages/RegisterOnNairaLand'
import Phones from './pages/Phones'
import MusicRadio from './pages/MusicRadio'
import Politics from './pages/Politics'
import CarTalks from './pages/CarTalks'
import Education from './pages/Education'
import TechnologyMarket from './pages/TechnologyMarket'
import Login from './pages/Login'
import Properties from './pages/Properties'
import ScienceTechnology from './pages/ScienceTechnolog'
import Investment from './pages/Investment'
import Recent from './pages/Recent'
import NYSC from './pages/NYSC.js'
import Business from './pages/Business'
import Crime from './pages/Crime'
import Family from './pages/Family'
import ChangeEmail from './pages/ChangeEmail'
import Trending from './pages/Trending'
import Jobs from './pages/Jobs'
import Career from './pages/Career'
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Mentions'
import Shared from './pages/Shared'
import FollowedTopics from './pages/FollowedTopics'
import followedboards from './pages/FolowedBoards'
import Following from './pages/Following'
import Likes from './pages/Likes'
import MyProfile from './pages/MyProfile'
import Travel from './pages/Travel'
import Sports from './pages/Sports'
import Romance from './pages/Romance'
import Programming from './pages/Programming'
import Health from './pages/Health'
import Food from './pages/Food'
import FollowedBoards from './pages/FolowedBoards'
import Mentions from './pages/Mentions'
 import Autos from './pages/Autos'
import Topics from './pages/Topics'
import WebMaster from './pages/WebMaster'
import Computers from './pages/Computers'
import NairaLandGeneral from './pages/NairaLandGeneral'
import Agriculture from './pages/Agriculture'
import Celebrities from './pages/Celebrities'
import Culture from './pages/Culture'
import Diaries from './pages/Diaries'
import Events from './pages/Events'
import Jokes from './pages/Jokes'
import Literature from './pages/Literature'
import Pets from './pages/Pets'
import ForumGames from './pages/ForumGames'
import Gaming from './pages/Gaming'
import GraphicsVideo from './pages/GraphicsVideo'
import Fashion from './pages/Fashion'

 
const App = () => {

  return (
    
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/recent' element={<Recent/>}/>
    <Route path='/registeronnairaland' element={<RegisterOnNairaLand/>}/>
    <Route path='/editprofile' element={<EditProfile/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/crime' element={<Crime/>}/>
    <Route path='/politics' element={<Politics/>}/>
    <Route path='/nysc' element={<NYSC/>}/>
    <Route path='/business' element={<Business/>}/>
    <Route path='/family' element={<Family/>}/>
    <Route path='/sciencetechnology' element={<ScienceTechnology/>}/>
    <Route path='/technologymarket' element={<TechnologyMarket/>}/>
    <Route path='/phones' element={<Phones/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/musicradio' element={<MusicRadio/>}/>
    <Route path='/tvmovies' element={<TvMovies/>}/>
    <Route path='/investment' element={<Investment/>}/>
    <Route path='/cartalks' element={<CarTalks/>}/>
    <Route path='/entertainment' element={<Entertainment/>}/>
    <Route path='/romance' element={<Romance/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/travel' element={<Travel/>}/>
    <Route path='/programming' element={<Programming/>}/>
    <Route path='/health' element={<Health/>}/>
    <Route path='/likes' element={<Likes/>}/>
    <Route path='/mentions' element={<Mentions/>}/>
    <Route path='/shared' element={<Shared/>}/>
    <Route path='/following' element={<Following/>}/>
    <Route path='/followedboards' element={<FollowedBoards/>}/>
    <Route path='/followedtopics' element={<FollowedTopics/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/autos' element={<Autos/>}/>
    <Route path='/topics' element={<Topics/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/Webmaster' element={<WebMaster/>}/>
    <Route path='/computers' element={<Computers/>}/>
    <Route path='/nairalandgeneral' element={<NairaLandGeneral/>}/>
    <Route path='/agriculture' element={<Agriculture/>}/>
    <Route path='/celebrities' element={<Celebrities/>}/>
    <Route path='/culture' element={<Culture/>}/>
    <Route path='/diaries' element={<Diaries/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/jokes' element={<Jokes/>}/>
    <Route path='/literature' element={<Literature/>}/>
    <Route path='/pets' element={<Pets/>}/>
    <Route path='/forumgames' element={<ForumGames/>}/>
    <Route path='/gaming' element={<Gaming/>}/>
    <Route path='/graphicsvideo' element={<GraphicsVideo/>}/>
    <Route path='/fashion' element={<Fashion/>}/>
    <Route path='/Changeemail' element={<ChangeEmail/>}/>
    <Route path='/myprofile' element={<MyProfile/>}/>
    <Route path='/nairalandads' element={<NairaLandAds/>}/>
    

    
    
    
    </Routes>
    
    

   
   
  )
}

export default App 