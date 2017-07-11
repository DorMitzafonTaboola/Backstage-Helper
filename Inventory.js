var inventoryCampaign = $('tbody tr:first-child');

$(inventoryCampaign).addClass('campaignItem');

var imgsrc = chrome.extension.getURL('Taboola-Widget-Example.png');
$(inventoryCampaign).mouseover(function() {
    if (!$('.imageBox').length) {
      $(inventoryCampaign).first().append("<div class='imageBox'><img id='demoImg' /><div><a target='_blank' id='demoLink' href='https://www.taboola.com/content-recommendation-demo'>Try it yourself!</div></a</div>");
      $('#demoImg').attr('src', imgsrc);
    }
});

$(inventoryCampaign).mouseleave(function() {
    $('.imageBox').remove();
});
