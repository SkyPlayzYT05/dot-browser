import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { InputField } from './style'
import { Button } from '~/renderer/components/Button';
import { Sections, Image, SettingsSection, ListItem, StyledNavigationDrawerItem, NavDILine_Profile, Title, Buttons, A, AboutWrapper } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import console = require('console');
import Switch from '@material-ui/core/Switch';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { DropArrow } from '../Overlay/style';

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  document.getElementById("search-engine-dp").style.opacity = "0";
  document.getElementById("search-engine-dp").style.pointerEvents = "none";
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
};

const YourProfile = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <Image src={icons.user} style={{ filter: 'invert(100%)', width: '30px' }}></Image>
        <Title style={{ fontSize: 25 }}>{require("os").userInfo().username}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button style={{ backgroundColor: '#f3f3f3', color: '#1e1e1e' }}>
            Sign out
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});

const wexond = () => {
  var url = "https://github.com/wexond/wexond"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const enderdev = () => {
  var url = "https://github.com/EnderDev"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const geek = () => {
  var url = "https://github.com/GamingGeek"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const func = () => {
  var url = "https://github.com/frostylosty"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const sky = () => {
  var url = "https://github.com/SkyPlayzYT05"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}


const AboutDot = observer(() => {
  return (
    <SettingsSection style={{ backgroundColor: 'transparent' }}>
      <ListItem>
        <Image id="maybe-click-the-arrow" onClick={clearSecretBoyo} src={icons.logo} style={{ width: '30px', transition: 'filter 0.2s' }}></Image>
        <Title style={{ fontSize: 20 }}>Dot 2.0.0-beta.11</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <A onClick={secretBoyo} style={{ padding: '22px 8px 10px 12px', cursor: 'pointer', transition: 'background-color 0.2s', borderRadius: '50%', marginRight: '-10px' }}>
            <Image src={icons.down} style={{ filter: 'invert(100%)' }}></Image>
          </A>
        </Buttons>
      </ListItem>
      <AboutWrapper id="about-wrapper">
        <Title style={{ fontSize: 14, marginLeft: '40px' }}>Dot was made possible thanks to <A onClick={wexond}>Wexond</A> and ☕.</Title>
        <Title style={{ fontSize: 14, marginLeft: '40px' }}>Made in <Image src={icons.uk} style={{ width: '14px' }}></Image>Great Britain with ❤.</Title>
        <Title style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>Developers</Title>
        <A onClick={enderdev} title="<endercraftergaming@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>EnderDev,</A>
        <A onClick={geek} title="<thegaminggeek362@gmail.com>" style={{ marginLeft: '5px', color: '#dadada' }}>Geek (Jake Ward)</A>
        <Title style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>Beta Testers</Title>
        <A onClick={func} title="<oli.loversss@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>function, </A>
        <A onClick={sky} title="<bognonjeremy05@gmail.com>" style={{ color: '#dadada' }}>Sky</A>
        <Title style={{ fontSize: 12, marginLeft: '40px', marginTop: '10px', color: '#dadada' }}>&copy; 2019 Ender And Fire Development</Title>
      </AboutWrapper>
    </SettingsSection>
  );
});


const showProfile = () => {
}

const secretBoyo = () => {
  var x = document.getElementById("about-wrapper");
  if (x.style.display === "none") {
    x.style.display = null;
    document.getElementById("maybe-click-the-arrow").style.filter = ``
  } else {
    x.style.display = "none";
    const eggies = [
      'invert(40%) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2)',
      'grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8)',
      'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)',
      'grayscale(100%) brightness(222%) sepia(1000%) hue-rotate(6deg) saturate(600%) contrast(1.1)'
    ]
    const egg = eggies[Math.floor(Math.random()*eggies.length)];
    document.getElementById("maybe-click-the-arrow").style.filter = egg;
  }
}

const clearSecretBoyo = () => {
  document.getElementById("maybe-click-the-arrow").style.filter = ``
}

const editJsonFile = require("edit-json-file");
 
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

const optionsData = file.get();

class ToggleSwitchDL extends React.Component {
  state = {
    dotLauncherToggle: optionsData.toggleDotLauncher,
    checkedB: true,
  };

  handleChange = (name: any) => (event: any) => {
    this.setState({ [name]: event.target.checked });
    if(name == "dotLauncherToggle") {
      if(optionsData.toggleDotLauncher == true) {
        file.set("toggleDotLauncher", false);
        console.info(`[SettingsStore] Set dotLauncherEnabled to false`)
        file.save();
        document.getElementById("dot").style.display = "none";
      }
      else {
        file.set("toggleDotLauncher", true);
        console.info(`[SettingsStore] Set dotLauncherEnabled to true`)
        file.save();
        document.getElementById("dot").style.opacity = "1";
        document.getElementById("dot").style.pointerEvents = "all";
        document.getElementById("dot").style.width = "auto";
        document.getElementById("dot").style.display = null;
      }
    }
  };

  render() {
    return (
      <Switch
        checked={this.state.dotLauncherToggle}
        onChange={this.handleChange('dotLauncherToggle')}
        value="checkedA"
        color="primary"
      />
    );
  }
}

export default ToggleSwitchDL;

var seMenuVisible = false;

const toggleSeMenu = (e: any) => {
  e.stopPropagation();
  var x = document.getElementById("search-engine-dp")
  if(x.style.opacity == "0") {
    x.style.opacity = "1";
    x.style.pointerEvents = "all";
  }
  else {
    x.style.opacity = "0";
    x.style.pointerEvents = "none";
  }
}

const setEngineGoogle = () => {
  file.set("searchEngine", "google");
  console.info(`[SettingsStore] Set searchEngine to custom string google`)
  file.save(); 
  seMenuVisible = false   
  document.getElementById("ctx-item-g").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineBing = () => {
  file.set("searchEngine", "bing");
  console.info(`[SettingsStore] Set searchEngine to custom string bing`)
  file.save();  
  seMenuVisible = false 
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineYahoo = () => {
  file.set("searchEngine", "yahoo");
  console.info(`[SettingsStore] Set searchEngine to custom string yahoo`)
  file.save(); 
  seMenuVisible = false 
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineDdg = () => {
  file.set("searchEngine", "ddg");
  console.info(`[SettingsStore] Set searchEngine to custom string ddg`)
  file.save();    
  seMenuVisible = false
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineEcosia = () => {
  file.set("searchEngine", "ecosia");
  console.info(`[SettingsStore] Set searchEngine to custom string ecosia`)
  file.save();    
  seMenuVisible = false
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "#585858c7";
}

var se = file.get("searchEngine");
if(se == "google") {
  var cmICG = "#585858c7"
}
if(se == "yahoo") {
  var cmICY = "#585858c7"
}
if(se == "bing") {
  var cmICB = "#585858c7"
}
if(se == "ddg") {
  var cmICD = "#585858c7"
}
if(se == "ecosia") {
  var cmICE = "#585858c7"
}

export const Appearance = observer(() => {
    return (
      <SettingsSection>
        <ListItem>
          <Title style={{ fontSize: 15 }}>Toggle Dot button</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: '-12px' }}>
            <ToggleSwitchDL />
          </Buttons>
        </ListItem>

        <ListItem>
          <Title style={{ fontSize: 15 }}>Search Engine</Title>
          <Buttons style={{ marginLeft: 'auto' }}>
            <DropArrow onClick={toggleSeMenu} style={{ cursor: 'pointer' }} />
            <ContextMenu id="search-engine-dp" visible={seMenuVisible} style={{ top: '450px', marginLeft: '-50px' }}>            
              <ContextMenuItem icon={icons.search} onClick={setEngineGoogle} style={{ backgroundColor: `${cmICG}` }} id="ctx-item-g">
                Google
              </ContextMenuItem>
              <ContextMenuItem onClick={setEngineYahoo} icon={icons.search} style={{ backgroundColor: `${cmICY}` }} id="ctx-item-y">
                Yahoo
              </ContextMenuItem>
              <ContextMenuItem icon={icons.search} onClick={setEngineBing} style={{ backgroundColor: `${cmICB}` }} id="ctx-item-b">
                Bing
              </ContextMenuItem>
              <ContextMenuItem icon={icons.search} onClick={setEngineDdg} style={{ backgroundColor: `${cmICD}` }}  id="ctx-item-d">
                DuckDuckGo
              </ContextMenuItem>
              <ContextMenuItem icon={icons.search} onClick={setEngineEcosia} style={{ backgroundColor: `${cmICE}` }} id="ctx-item-e">
                Ecosia
              </ContextMenuItem>
            </ContextMenu>
          </Buttons>
        </ListItem>
      </SettingsSection>
    );
});

export const Settings = observer(() => {
  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'settings' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <NavigationDrawer
          title="Settings"
          onBackClick={onBackClick}
        >
        </NavigationDrawer>
        <Sections>
          <Content>
              <Title style={{ margin: '75px -30px -25px -30px' }}>My Profile</Title>
              <YourProfile />

              <Title style={{ margin: '75px -30px -25px -30px' }}>Appearance</Title>
              <Appearance />
              <Title style={{ margin: '75px -30px -25px -30px' }}>About Dot</Title>
              <AboutDot />

          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});
