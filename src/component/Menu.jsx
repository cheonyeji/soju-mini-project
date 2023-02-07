import React, { useState } from "react";
import styled from "styled-components";

const VerticalMenu = styled.ul``;
const AddBtn = styled.button``;

function Menu() {
  const [showModal, setShowModal] = useState(false);

  return (
    <aside>
      <VerticalMenu>
        <li>
          <AddBtn onClick={setShowModal(true)}>추가</AddBtn>
        </li>
        <li>
          <span>지복이</span>
        </li>
        <li>
          <span>엠돌이</span>
        </li>
      </VerticalMenu>
    </aside>
  );
}

export default Menu;
