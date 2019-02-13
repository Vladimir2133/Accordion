import React, { Component } from "react";
//consts
import { AccNames, Acc } from "Accardion/constants/AccConsts";
//component
import { FirstAccardion } from "Accardion/components/Accardions/FirstAccardion";
import { SecondAccardion } from "Accardion/components/Accardions/SecondAccardion";
import { ThirdAccardion } from "Accardion/components/Accardions/ThirdAccardion";
//styles
import {
  AccStyle,
  AccButton,
  AccContent,
  IconAcc
} from "Accardion/style/AccardionStyle";

class Accardion extends React.Component {
  state = {
    ONE: false,
    TWO: false,
    THREE: false
  };

  handleClick = AccIndex => () => {
    this.setState({
      [AccIndex]: !this.state[AccIndex]
    });
  };

  handleChangeImg = AccIndex => {
    const BackgAcc = this.state[AccIndex] === true ? "180deg" : "";
    console.log("ggd", BackgAcc);
    return BackgAcc;
  };

  render() {
    const Content = "Simple text";
    return (
      <div>
        {Acc.map(({ title, AccIndex }, ind) => (
          <AccStyle key={ind}>
            <AccButton onClick={this.handleClick(AccIndex)}>
              {title}
              <IconAcc imgactive={this.handleChangeImg(AccIndex)}> </IconAcc>
              {console.log()}
            </AccButton>
            <AccContent>
              {this.state[AccIndex] && AccIndex === "ONE" && (
                <FirstAccardion text={Content} />
              )}

              {this.state[AccIndex] && AccIndex === "TWO" && (
                <SecondAccardion />
              )}
              {this.state[AccIndex] && AccIndex === "THREE" && (
                <ThirdAccardion />
              )}
            </AccContent>
          </AccStyle>
        ))}
      </div>
    );
  }
}

export default Accardion;
