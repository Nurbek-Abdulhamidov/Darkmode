import styled, { css } from "styled-components";
import { Settings } from "@styled-icons/evaicons-solid/Settings";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";
import { Grid1x2 } from "@styled-icons/bootstrap/Grid1x2";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { PermMedia } from "@styled-icons/material/PermMedia";
import { MessageDots } from "@styled-icons/boxicons-regular/MessageDots";
import { BellFill } from "@styled-icons/bootstrap/BellFill";
import Toggle from "react-dark-mode-toggle";

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: fit-content;
  padding: 50px 300px;
  box-sizing: border-box;
 
`;

export const MobileContainer = styled.div`
  width: 400px;
  height: 630px;
  box-sizing: border-box;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
  background: ${({ color }) => color};
  border-radius:10px;
`;

export const IconCon = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

export const Icon = styled.div``;

Icon.Arrow = styled(KeyboardArrowLeft)`
  color: ${({ color }) => color};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

Icon.Switch = styled(Switch)`
  color: ${({ color }) => color};
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: auto;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  border: 0.5px solid #000;
`;

export const TitleImg = styled.div`
  font-size: 22px;
  font-style: bold;
  font-family: SF Pro Display;
  color:${({ color }) => color} ;
`;

export const Desc = styled.div`
  font-size: 15px;
  font-style: bold;
  font-family: SF Pro Display;
  color:${({ color }) => color} ;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 30px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-style: bold;
  font-family: SF Pro Display;
  padding-left: 10px;
  color:${({ color }) => color} ;
`;

export const Line = styled.div`
  width: 85%;
  height: 1px;
  background: #e9e9e9;
  box-sizing: border-box;
  margin: 10px 30px;
`;

Icon.Dark = styled(MoonFill)`
  width: 25px;
  height: 25px;
  color:  color:${({ color }) => color} ;;
`;

Icon.Grid = styled(Grid1x2)`
  width: 25px;
  height: 25px;
  color: #fbb65c;
`;

Icon.Chat = styled(UserCheck)`
  width: 25px;
  height: 25px;
  color: #ff7eb0;
`;

Icon.Group = styled(UserPlus)`
  width: 25px;
  height: 25px;
  color: #36e3ff;
`;

Icon.Media = styled(PermMedia)`
  width: 25px;
  height: 25px;
  color: #5476ff;
`;

Icon.Setting = styled(Settings)`
  width: 25px;
  height: 25px;
  color: #5476ff;
`;

Icon.Comment = styled(MessageDots)`
  width: 25px;
  height: 25px;
  color: #0bc630;
`;

Icon.Notification = styled(BellFill)`
  width: 25px;
  height: 25px;
  color: #a394c2;
`;
