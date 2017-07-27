var inventoryCampaign = $('tbody tr:first-child');
$(inventoryCampaign).attr('id','campaignItem');

var textArea  = $('.paste-buff textarea');
$(textArea).addClass('textFrame');
$('#okBtn').addClass('textFrame');

var widgetSrc = chrome.extension.getURL('Taboola-Widget-Example.png');
$(inventoryCampaign).mouseover(function() {
    if (!$('#imageBox').length) {
      $(inventoryCampaign).append("<div id='imageBox'><h1 id='preview'>Quick Preview</h1><a target='_blank' id='demoLink' href='https://www.taboola.com/content-recommendation-demo'>Content recommendation demo</a><img id='demoImg' src=" + widgetSrc + " /></div>");
    }
});

var inArr = {campaignItem:false, imageBox:false};

$('#imageBox, #campaignItem').mouseover(function(){
    inArr [$(this).attr('id')] = true;
});


$('#imageBox, #campaignItem').mouseleave(function(){
    inArr [$(this).attr('id')] = false;
    setTimeout(function() {
      if(!inArr.imageBox && !inArr.campaignItem) {
        $('#imageBox').remove();
      }
    }, 100);
});

$(textArea).mouseover(function() {
    $(this).addClass('highlight');
});

$(textArea).mouseleave(function() {
    $(this).removeClass('highlight');
});

$('#sort-campaign_invnentory-title').append("<a id='selector' class='titleHead'>?</a>");
$('#sort-campaign_invnentory-title').prev().append("<a id='selector' class='thumbnailHead'>?</a>");

$('.thumbnailHead, .titleHead, #okBtn').mouseover(function() {
    if (!$('#expBubble').length) {
      if ($(this).hasClass('thumbnailHead')) {
        $(this).append("<div id='expBubble' class='thumbnail'>Your thumbnail size must a have a minimum width of 600px and a minimum length of 500px. Your thumbnail file size must be no more than 1 MB.</div>");
      }
      if ($(this).hasClass('titleHead')) {
        $(this).append("<div id='expBubble' class='title'>Your title character length must have 35-45 characters. Titles must make sense and must only contain correctly spelled words.</div>");
      }
      if ($(this).hasClass('textFrame')) {
        $('.form-body').append("<div id='expBubble' class='addButton'>Click here to add a new item.</div>");
      }
    }
});

$('.thumbnailHead, .titleHead').add('#okBtn').mouseleave(function() {
    $('#expBubble').remove();
});
