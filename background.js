function click(e) {
    chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
        var specTab = tabs[0];
        if (specTab.title == "Campaigns: Campaign Summary")
        {
            chrome.tabs.executeScript({file: "Summary.js"});
            chrome.tabs.insertCSS({file: "Summary.css"});
        }
        else if (specTab.title == "Campaigns: Top Campaign Content")
        {
            chrome.tabs.executeScript({file: "topCampaignContent.js"});
            chrome.tabs.insertCSS({file: "topCampaignContent.css"});
        }
        else if (specTab.title == "Campaigns: Campaign Management")
        {
            chrome.tabs.executeScript({file: "Management.js"});
            chrome.tabs.insertCSS({file: "Management.css"});
        }
        else
        {
            chrome.tabs.executeScript({file: "Inventory.js"});
            chrome.tabs.insertCSS({file: "Inventory.css"});
        }
    });
}

chrome.browserAction.onClicked.addListener(click);