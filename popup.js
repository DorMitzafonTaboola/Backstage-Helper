$('#enable').click(function() {
  $(this).prop('disabled', 'true');
  $('#disable').removeAttr('disabled');
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
