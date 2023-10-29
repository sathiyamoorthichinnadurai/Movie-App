import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom:2px solid lightgray;
`;
const Coverimage = styled.img`
  object-fit: cover;
  height: 352px;
`;
const Infocoloumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;
const Moviename = styled.span`
    font-size: 22px;
    font-weight: 800;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform:capitalize;
    overflow: hidden;
`;
const Movieinfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin: 4px 0;
   
    text-overflow: ellipsis;
    text-transform:capitalize;
    overflow: hidden;
    & span{
      opacity: 0.7;
      
    }
`;
const Closeicon= styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const Loading= styled.img`
width: 120px;
height: 120px;
margin: 150px;

`;


function Movieinfocomponent(props) {
  const [movieinfo, setmovieinfo] = useState()
  const { selectedmovie } = props;
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${selectedmovie}&apikey=6f2f2968`)
      .then((res) => setmovieinfo(res.data))
  }, [selectedmovie])
  return (
    <>
      <Container>
        {movieinfo?
        <>
        <Coverimage src={movieinfo?.Poster} />
        <Infocoloumn>
          <Moviename>{movieinfo?.Type} :{movieinfo?.Title} </Moviename>
          
          <Movieinfo>
            Genre : <span>{movieinfo?.Genre}</span>
          </Movieinfo>
          <Movieinfo>
            Director : <span>{movieinfo?.Director}</span>
          </Movieinfo>
          <Movieinfo>
           Actors : <span>{movieinfo?.Actors}</span>
          </Movieinfo>
          <Movieinfo>
            Rated : <span>{movieinfo?.Rated}</span>
          </Movieinfo>
          <Movieinfo>
           Language : <span>{movieinfo?.Language}</span>
          </Movieinfo>
          <Movieinfo>
           Released : <span>{movieinfo?.Released}</span>
          </Movieinfo>
          <Movieinfo>
           Runtime : <span>{movieinfo?.Runtime}</span>
          </Movieinfo>
          <Movieinfo>
           Released : <span>{movieinfo?.Released}</span>
          </Movieinfo>
          <Movieinfo>
            IMDP Rating : <span>{movieinfo?.imdbRating}</span>
          </Movieinfo>
          <Movieinfo>
          Plot : <span>{movieinfo?.Plot}</span>
          </Movieinfo>
        </Infocoloumn>
        <Closeicon src='close.png' onClick={()=>props.onselectedmovie()}/>
        </>:<Loading src='loading.png'/>}
        
      </Container>
    </>
  )
}

export default Movieinfocomponent