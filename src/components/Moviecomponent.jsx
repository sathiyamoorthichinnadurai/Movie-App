import React from 'react'
import styled from 'styled-components'

const Moviecontainer=styled.div`
  display  :flex ;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 2px 3px 5px 0 #aaa;
  cursor: pointer;
  
  
`;
const Coverimage=styled.img`
  object-fit: cover;
  height: 362px;

`;
const Moviename=styled.span`
font-size: 18px;
font-weight:600;
color: black;
margin: 10px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;
const Moviecoloumn=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const MovieInfo=styled.span`
font-size: 18px;
font-weight:600;
color: black;
text-transform:capitalize;

`;
const Infocoloumn =styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

function Moviecomponent(props) {
  const {Title,Year,imdbID,Type,Poster}=props.movie
  return (
    <>
        <Moviecontainer onClick={()=>props.onselectedmovie(imdbID)}>
          <Coverimage src={Poster}/> 
          <Moviename>{Title} </Moviename>
          <Moviecoloumn>
            <MovieInfo>year : {Year}</MovieInfo>
             
            <MovieInfo>Type : {Type}</MovieInfo>
          </Moviecoloumn>
        </Moviecontainer>
    
    </>
  )
}

export default Moviecomponent