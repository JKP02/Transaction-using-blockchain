import React, { Component } from 'react';

// function Chat = () => {
//   componentDidMount() {
//     (function (d, m) {
//       var kommunicateSettings = {
//         "appId": "200708518657f65d9d3d3e2d2dbd5a60c",
//         "popupWidget": true,
//         "automaticChatOpenOnNavigation": true
//       };
//       var s = document.createElement("script");
//       s.type = "text/javascript";
//       s.async = true;
//       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//       var h = document.getElementsByTagName("head")[0];
//       h.appendChild(s);
//       window.kommunicate = m;
//       m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
//   };

//   return (
//     <div>
//     Hi
//     </div>
//   );
// }
class Chat extends Component {
  componentDidMount() {
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"2d68bd4fde53135fcf6e7da9279231504","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div>
      Hi
      </div>
    );
  }
}

export default Chat;


