import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Header() {
  const { userData } = useSelector((state) => state.loginSlice);
  const menuRight = useRef(null);

  const items = [
    {
      label: "T",
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Export",
          icon: "pi pi-upload",
        },
      ],
    },
  ];
  return (
    <HeaderWrapper>
      <UserName> {userData && `${userData.name} ${userData.surname}`}</UserName>

      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />

      <Avatar
        icon="pi pi-user"
        size="normal"
        shape="circle"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        onClick={(event) => menuRight.current.toggle(event)}
      />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  border-bottom: 1px solid #ededed;
  height: 50px;
`;

const UserName = styled.span`
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;
