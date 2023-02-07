import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
const rawData = [
  {
    title: "복돌",
    content: "지복이와 엠돌이의 어린 시절 사진",
    imgSrc: "https://i.ibb.co/vZdb9SM/baby-cats.jpg",
  },
  {
    title: "지복",
    content: "분명 빈백에 누워 있는데 치약을 짜놓은 것 같은 웃긴 모양새...",
    imgSrc: "https://i.ibb.co/tCPsjcs/bag-cat.jpg",
  },
  {
    title: "복돌",
    content: "고양이들은 건조대를 좋아해!",
    imgSrc: "https://i.ibb.co/9gWPB1w/double-cats.jpg",
  },
  {
    title: "엠돌",
    content: "엠돌이는 배를 보여주고 누워있는 걸 좋아해요",
    imgSrc: "https://i.ibb.co/RYnHy6T/lying-cat.jpg",
  },
  {
    title: "지복",
    content: "지복이 자는거 냥적으로 너무 못생겼어요",
    imgSrc: "https://i.ibb.co/kJv6cJL/sleeping-cat.jpg",
  },
];

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid #a55eea;
  color: #a55eea;
  height: 50px;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  grid-template-rows: 1fr;
  height: calc(100% - 60px);
  margin-top: 10px;
`;

const VerticalMenu = styled.ul`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 150px;
  height: 100%;
  margin-right: 10px;
  border: 3px solid #2f3542;
  padding: 10px;
  list-style-type: none;
`;

const VerticalMenuLi = styled.li`
  margin-bottom: 5px;
  cursor: pointer;
`;

const Section = styled.section`
  height: 100%;
  border: 3px solid #70a1ff;
  overflow-y: auto;
`;

const styledSpan = styled.span`
  word-break: break-all;
  &:hover {
    color: #8854d0;
  }
`;

const AddBtn = styled.button`
  width: 100%;
  border: none;
  font-size: 16px;
  height: 1.5em;
  cursor: pointer;
  background-color: #ffc0c9;
  border-radius: 5px;
  &:hover {
    background-color: var(--dark-purple);
    color: var(--white);
  }
`;

const AlbumList = styled.ul`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

function MainPage() {
  const [data, setData] = useState(rawData);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header>
        <p>지복 & 엠돌</p>
      </Header>
      <Main>
        <aside>
          <VerticalMenu>
            <VerticalMenuLi>
              <AddBtn onClick={() => setShowModal(true)}>추가</AddBtn>
            </VerticalMenuLi>
            <VerticalMenuLi>
              <styledSpan>지복이</styledSpan>
            </VerticalMenuLi>
            <VerticalMenuLi>
              <styledSpan>엠돌이</styledSpan>
            </VerticalMenuLi>
          </VerticalMenu>
        </aside>
        <Section>
          <AlbumList>
            {data.map((data) => (
              <ListItem
                key={data.name}
                imgUrl={data.imgSrc}
                content={data.content}
              />
            ))}
          </AlbumList>
        </Section>
      </Main>
    </>
  );
}

export default MainPage;
