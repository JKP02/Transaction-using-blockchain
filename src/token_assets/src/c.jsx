import React, { Component } from 'react'

export default class chat extends Component {
  render() {
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {"appId":"<APP_ID>","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
      }
    return (
      <div><h1>Hiii</h1></div>
    )
  }
}