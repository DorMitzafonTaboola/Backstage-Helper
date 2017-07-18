// chrome.extension.onConnect.addListener(function(port) {
//       console.log("Connected .....");
//       port.onMessage.addListener(function(msg) {
//            console.log(msg);
//            console.log($('.main-nav').hasClass('extensionEnabled'));
//            chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
//              console.log()
//             //  if ($('.main-nav').hasClass('extensionEnabled')) {
//             //    port.postMessage("true");
//             //  }
//             //  else {
//             //    port.postMessage("false");
//             //  }
//            });
//       });
//  })
