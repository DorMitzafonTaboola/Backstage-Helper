$('#enable').click(function() {
  $(this).prop('disabled', 'true');
  $('#disable').removeAttr('disabled');
  $(this).removeClass('hoverButton');
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
      var specTab = tabs[0];
      chrome.tabs.executeScript({file: "jquery-3.2.1.min.js"});
      chrome.tabs.executeScript({file: "Campaigns.js"});
      chrome.tabs.insertCSS({file: "Campaigns.css"});
      if (specTab.title == "Campaigns: Campaign Summary")
      {
          chrome.tabs.executeScript({file: "Summary.js"});
          chrome.tabs.insertCSS({file: "Summary.css"});
      }
      else if (specTab.title == "Campaigns: Campaign Management")
      {
          chrome.tabs.executeScript({file: "Management.js"});
          chrome.tabs.insertCSS({file: "Management.css"});
      }
      else if (specTab.title == "Campaigns: Campaign Inventory Edit Update")
      {
          chrome.tabs.executeScript({file: "Inventory.js"});
          chrome.tabs.insertCSS({file: "Inventory.css"});
      }
  });
});

$('#disable').click(function() {
  $(this).prop('disabled', 'true');
  $('#enable').removeAttr('disabled');
  $(this).removeClass('hoverButton');
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
    var specTab = tabs[0];
    chrome.tabs.executeScript({file: "disableCampaigns.js"});
    if (specTab.title == "Campaigns: Campaign Summary")
    {
        chrome.tabs.executeScript({file: "disableSummary.js"});
    }
    else if (specTab.title == "Campaigns: Campaign Management")
    {
        chrome.tabs.executeScript({file: "disableManagement.js"});
    }
    else if (specTab.title == "Campaigns: Campaign Inventory Edit Update")
    {
        chrome.tabs.executeScript({file: "disableInventory.js"});
    }
  });
});

if(!$('#disable').attr('disabled')) {
    $('#disable').mouseover(function() {
        $(this).addClass('hoverButton');
    });
}
$('#disable').mouseleave(function() {
    $(this).removeClass('hoverButton');
});

if(!$('#enable').attr('disabled')) {
    $('#enable').mouseover(function() {
        $(this).addClass('hoverButton');
    });
}
$('#enable').mouseleave(function() {
    $(this).removeClass('hoverButton');
});

// var port = chrome.extension.connect({
//      name: "talk to browser"
// });
// port.postMessage("is the extension enabled?");
// port.onMessage.addListener(function(msg) {
//      console.log(msg);
// });
