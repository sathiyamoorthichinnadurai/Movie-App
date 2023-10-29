import { useState } from 'react'
import styled from 'styled-components'
import Moviecomponent from './components/moviecomponent';
import Movieinfocomponent from './components/Movieinfocomponent';
import axios from 'axios';
 

const Container =styled.div`
  display:flex;
  flex-direction:column;`;
const Header =styled.div`
  display: flex;
  flex-direction:row;
  background-color:black;
  color:white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  align-items: center;
`;
const Appname=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
const Movieimage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const Searchbox =styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  align-items: center;
  
`;
const Searchicon= styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  margin-left: 15px;
  overflow: hidden;
`;
const MovieListcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  padding: 30px;
  gap:24px;
  justify-content: space-evenly;
`;
const Placeholder= styled.img`
width: 120px;
height: 120px;
margin: 150px;
opacity: 50%;
`;

function App() {
  const API_KEY='e1c54e52'
  const [searchQuery,updatesearchQuery]=useState();
  const [timeoutId,ubdatetimeoutId]=useState();
  const [movieList,updatemovielist]=useState([]);
  const [selectedmovie,onselectedmovie]=useState();

  const fetchdata=async(searchstring)=>{
    const res= await axios.get(`http://www.omdbapi.com/?s=${searchstring}&apikey=e1c54e52`);
    console.log(res)
    updatemovielist(res.data.Search)
  };

  const onTextchange=(event)=>{
    clearTimeout(timeoutId)
    updatesearchQuery(event.target.value)
    const timeout=setTimeout(()=>fetchdata(event.target.value),1000)
    ubdatetimeoutId(timeout)
  }
  return (
    <>
      <Container>
        <Header>
          <Appname>
            <Movieimage src='/video-player.png'/>
            React Movie App
          </Appname>
          <Searchbox>
            <Searchicon src='/search.png'/>
            <SearchInput placeholder='Search Movie' onChange={onTextchange}/>
          </Searchbox>
        </Header>
        {selectedmovie && <Movieinfocomponent selectedmovie={selectedmovie} onselectedmovie={onselectedmovie}/>}
       <MovieListcontainer>
        
         {
          movieList?.length? movieList.map((movie,index)=><Moviecomponent key={index} movie={movie} onselectedmovie={onselectedmovie}/>):<Placeholder src='/video-player.png'/>
         }
        
       </MovieListcontainer>
      </Container>
    </>
  )
}

export default App
