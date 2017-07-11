summary = $('.main-nav').find("[data-menu-item-id='campaign-summary']");
topContent = $('.main-nav').find("[data-menu-item-id='top-campaign-content']");
management = $('.main-nav').find("[data-menu-item-id='campaign-management']");

$(summary).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='summaryBox'>Campaign reporting is located on the Campaign Summary page. This page shows data at the campaign level. By default, when you land on the Campaign Summary page, you’ll see the last 7 days’ data for all your campaigns combined</div>");
    }
});

$(summary).mouseleave(function() {
    $('.summaryBox').remove();
});

$(topContent).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='summaryBox'>In addition to seeing data by campaigns, you can also view your data by campaign items. This allows you to view how traffic is performing for you at an item level, giving you more granular insight into your campaign overall</div>");
    }
});

$(topContent).mouseleave(function() {
    $('.summaryBox').remove();
});

$(management).mouseover(function() {
    if (!$('#sideBar').length) {
      $('.main-nav').append("<div id='sideBar' class='managementBox'>Your campaigns and campaign items all have their own status that lets you know if they are running or not and where they are in the review process</div>");
    }
});

$(management).mouseleave(function() {
    $('.managementBox').remove();
});
