import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import ModalFun from "../../../Modal/ModalFuc";
const UserAccount = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Menu>
        <MenuButton as={Button} className={style.userIcon}>
          <Image
            width={"35px"}
            className={style.userIcon}
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyB0cmFuc2Zvcm09IiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNODYsMjEuNWMtMTcuNzYyNywwIC0zMi4yNSwxNC40ODczIC0zMi4yNSwzMi4yNWMwLDE3Ljc2MjcgMTQuNDg3MywzMi4yNSAzMi4yNSwzMi4yNWMxNy43NjI3LDAgMzIuMjUsLTE0LjQ4NzMgMzIuMjUsLTMyLjI1YzAsLTE3Ljc2MjcgLTE0LjQ4NzMsLTMyLjI1IC0zMi4yNSwtMzIuMjV6TTg2LDg2Yy0yOS42MDQ0OSwwIC01My43NSwyNC4xNDU1MSAtNTMuNzUsNTMuNzVoMTAuNzVjMCwtMjMuODA5NTcgMTkuMTkwNDMsLTQzIDQzLC00M2MyMy44MDk1NywwIDQzLDE5LjE5MDQzIDQzLDQzaDEwLjc1YzAsLTI5LjYwNDQ5IC0yNC4xNDU1MSwtNTMuNzUgLTUzLjc1LC01My43NXpNODYsMzIuMjVjMTEuOTI1NzgsMCAyMS41LDkuNTc0MjIgMjEuNSwyMS41YzAsMTEuOTI1NzggLTkuNTc0MjIsMjEuNSAtMjEuNSwyMS41Yy0xMS45MjU3OCwwIC0yMS41LC05LjU3NDIyIC0yMS41LC0yMS41YzAsLTExLjkyNTc4IDkuNTc0MjIsLTIxLjUgMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            alt=""
          />
        </MenuButton>
        <MenuList color={"#333"}>
          <ModalFun isOpen={open} setOpen={setOpen} />
          <Link
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to={"/signup"}>
            <MenuItem>Sign Up</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserAccount;
