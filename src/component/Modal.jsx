import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 5;
`;

const ModalDiv = styled.div`
  display: none;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 350px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  margin-bottom: 5px;
  font-size: 18px;
  border: 2px solid #70a1ff;
  border-radius: 5px;
  padding: 5px;
  &:focus {
    border: 2px solid #ffc0c9;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background-color: #70a1ff;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  height: 1.5em;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #ffc0c9;
    color: #2f3542;
  }
`;

function Modal({ showMoal }) {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <ModalBackground>
      <ModalDiv>
        <InputContainer onSubmit={submitHandler}>
          <Label for="input-title">이름</Label>
          <StyledInput
            type="text"
            placeholder="삼색이"
            id="input-title"
            maxlength="10"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label for="input-imgurl">이미지</Label>
          <StyledInput
            type="text"
            placeholder="URL"
            id="input-imgurl"
            required
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <Label for="input-content">내용</Label>
          <StyledInput
            type="text"
            placeholder="삼색이는 보통 암컷이래요"
            id="input-content"
            required
            onChange={(e) => setContent(e.target.value)}
          />
          <SubmitButton type="submit">저장</SubmitButton>
        </InputContainer>
      </ModalDiv>
    </ModalBackground>
  );
}

export default Modal;
