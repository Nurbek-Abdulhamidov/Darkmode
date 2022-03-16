import React, { useState, useContext } from "react";
import {
  Container,
  Icon,
  IconCon,
  MobileContainer,
  Img,
  ImgWrap,
  TitleImg,
  Desc,
  Item,
  Title,
  Line,
  ToggleMode,
} from "./AppStyle";
import img from "./img.png";
import { ThemeContext } from "./context";

function App() {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const dark = {
    icon: "black",
    title: "black",
    background: "white",
  };

  const light = {
    icon: "white",
    title: "white",
    background: "black",
  };

  const onChange = () => {
    setMode(!mode);
    setTheme(mode ? dark : light);
  };

  return (
    <Container >
      <MobileContainer color={theme.background}>
        <IconCon>
          <Icon.Arrow color={theme.icon} />
          <Icon.Switch color={theme.icon} />
        </IconCon>
        <ImgWrap>
          <Img src={img} alt="logo img" />
          <TitleImg color={theme.title}>Web Brain Academy</TitleImg>
          <Desc color={theme.title}>No one</Desc>
        </ImgWrap>
        {/* Dark */}
        <Item>
          <Icon.Dark color={theme.icon} />
          <Title color={theme.title}>Dark Mode</Title>
          <ToggleMode onChange={onChange} checked={mode} size={50} />
        </Item>
        {/* Grid */}
        <Item>
          <Icon.Grid />
          <Title color={theme.title}>Story</Title>
        </Item>
        {/* Chat */}
        <Item>
          <Icon.Chat />
          <Title color={theme.title}>Chat heads</Title>
        </Item>
        {/* Groups */}
        <Item>
          <Icon.Group />
          <Title color={theme.title}>Groups</Title>
        </Item>
        <Line></Line>
        {/* Media */}
        <Item>
          <Icon.Media />
          <Title color={theme.title}>Media</Title>
        </Item>
        {/* Settings */}
        <Item>
          <Icon.Setting />
          <Title color={theme.title}>Settings</Title>
        </Item>
        {/* Comment */}
        <Item>
          <Icon.Comment />
          <Title color={theme.title}>Comment</Title>
        </Item>
        {/* Notification  */}
        <Item>
          <Icon.Notification />
          <Title color={theme.title}>Notification</Title>
        </Item>
      </MobileContainer>
    </Container>
  );
}

export default App;
