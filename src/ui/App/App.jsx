import React from 'react'
import injectSheet from 'react-jss'
import Home from 'ui/Home'
import iAWS from "media/logos/aws-sdk-js.svg";
import iBootstrap from "media/logos/bootstrap.svg";
import iDrupal from "media/logos/drupal.svg";
import iExpress from "media/logos/express-light.svg";
import iJS from "media/logos/js-es6.svg";
import iMocha from "media/logos/mocha.svg";
import iMongoDB from "media/logos/mongodb-dark.svg";
import iMUI from "media/logos/material-ui.svg";
import iMySql from "media/logos/mysql.svg";
import iNextJS from 'media/logos/next.svg'
import iNode from "media/logos/node-light.new.svg";
import iRamda from "media/logos/ramda.svg";
import iReact from "media/logos/react.svg";
import iRedux from "media/logos/redux.svg";
import iRest from "media/logos/rest-api.svg";
import iStyledComponents from 'media/logos/styled-components-6.png'
// import iStyledComponentsLight from "media/logos/styled-components.light.png";
// import iStyledComponentsWithBackground from "media/logos/styled-components.w-background.png";

import iTravis from "media/logos/travis-ci.svg";
import iUbuntu from "media/logos/ubuntu.svg";
import iWebpack from "media/logos/webpack.svg";
import iWordpress from "media/logos/wordpress.svg";

const wrapper = {
  margin: '0 auto 0 auto',
  width: '50%',
  // backgroundColor: 'gray'
}
const outer = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  // backgroundColor: 'yellow'
}
const logo = {
  width: 150,
  border: '1px solid black',
}
const logoWithBackground = {
  width: 150,
  border: "1px solid black",
  backgroundColor: "black"
};


class App extends React.Component {
  render() {
    return (
      <div style={wrapper}>
        <div style={outer}>
          <img src={iAWS} style={logo} alt="aws javascript sdk logo" />
          <img src={iBootstrap} style={logo} alt="bootstrap logo" />
          <img src={iDrupal} style={logo} alt="drupal logo" />
          <img src={iExpress} style={logo} alt="Express JS logo" />
          <img src={iJS} style={logo} alt="javascript logo" />
          <img src={iMUI} style={logo} alt="material ui logo" />
          <img src={iMocha} style={logo} alt="mocha logo" />
          <img src={iMongoDB} style={logo} alt="mongoDB logo" />
          <img src={iMySql} style={logo} alt="material ui logo" />
          <img src={iNextJS} style={logo} alt="next js logo" />
          <img src={iNode} style={logo} alt="node js logo" />
          <img src={iRamda} style={logo} alt="ramda logo" />
          <img src={iReact} style={logo} alt="react js logo" />
          <img src={iRedux} style={logo} alt="redux logo" />
          <img src={iRest} style={logo} alt="rest api logo" />
          <img
            src={iStyledComponents}
            style={logo}
            alt="styled components logo"
          />
          <img src={iTravis} style={logo} alt="travis ci logo" />
          <img src={iUbuntu} style={logo} alt="ubuntu logo" />
          <img src={iWebpack} style={logo} alt="webpack logo" />
          <img src={iWordpress} style={logo} alt="wordpress logo" />
        </div>
      </div>
    );
  }
}

export default App