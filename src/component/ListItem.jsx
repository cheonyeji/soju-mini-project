import React from "react";
import styled from "styled-components";

const AlbumListItem = styled.li`
  width: 15rem;
  height: 15rem;
  background-color: #d1d8e0;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlbumImg = styled.img`
  width: 95%;
  height: auto;
  object-fit: contain;
`;

const AblumSpan = styled.span`
  word-break: break-all;
  text-align: center;
  padding: 10px;
`;

function ListItem({ imgUrl, content }) {
  return (
    <AlbumListItem>
      <AlbumImg src={imgUrl} />
      <AblumSpan>{content}</AblumSpan>
    </AlbumListItem>
  );
}

export default ListItem;
