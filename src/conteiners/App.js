//Components
import React, { Component } from "react";
//constants
import { tabNames, tabs } from "constants/tabs";
import { FirstTab } from "components/tabs/FirstTab";
import { SecondTab } from "components/tabs/SecondTab";
import { ThirdTab } from "components/tabs/ThirdTab";

//Accardion
import Accardion from "Accardion/conteiners/Accardion";
//style
import { Tabs, ButtonStyle, TabContent } from "style/components/style";

class App extends React.Component {
  state = {
    activeTab: tabNames.FIRST
  };

  handleClick = tabIndex => () => {
    this.setState({
      activeTab: tabIndex
    });
  };

  handleChangeColor = tabIndex => {
    const colorTab = this.state.activeTab === tabIndex ? "#1E90FF" : "";
    return colorTab;
  };

  render() {
    return (
      <div>
        <Tabs>
          {tabs.map(({ title, tabIndex }, ind) => (
            <ButtonStyle
              key={ind}
              onClick={this.handleClick(tabIndex)}
              backgcolor={this.handleChangeColor(tabIndex)}
            >
              {title}
            </ButtonStyle>
          ))}
        </Tabs>
        <TabContent>
          {this.state.activeTab === tabNames.FIRST && <Accardion />}
          {this.state.activeTab === tabNames.SECOND && <SecondTab />}
          {this.state.activeTab === tabNames.THIRD && <ThirdTab />}
        </TabContent>
      </div>
    );
  }
}
export default App;
