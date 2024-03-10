import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { singOutSuccess } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { userData } = useSelector((state) => state.loginSlice);
  const menuRight = useRef(null);
  const toast = useRef(null);
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const items = [
    {
      label: "Çıxış",
      icon: "pi pi-sign-out",
      command: () => {
        showToast("success","Uğurlu əməliyyat!","Daxil olunur..")

        toast.current.show({ severity: 'success', summary: 'Uğurlu əməliyyat', detail: 'Çıxış edildi', life: 3000 });
        setTimeout(()=>{
          localStorage.removeItem("token")
          dispatch(singOutSuccess())
          navigate("/")
        },1000)
    }
    },
  ];
  return (
    <HeaderWrapper>
      <Toast ref={toast} position="bottom-right" />
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
