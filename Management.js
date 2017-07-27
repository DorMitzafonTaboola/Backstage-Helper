//Buttons on right side
var managementBar = $('tr:first-child td:last-child');
$(managementBar).find('a:first-child').addClass('activate-border');
$('#btn-new-campaign').addClass('newCampaign');
$(managementBar).find('.fa-pencil').first().parent().addClass('properties-border');
$(managementBar).find('.fa-list').first().parent().addClass('EditInventory-border');
$(managementBar).find('.fa-files-o').first().parent().addClass('DupInventory-border');

//Headlines
$('#sort-campaigns-spending_limit, #sort-campaigns-cpc, #sort-campaigns-spending_model, #sort-campaigns-daily_spending_limit').css("text-align","left");
$('#sort-campaigns-spending_limit').append("<a id='selector' class='limit'>?</a>");
$('#sort-campaigns-cpc').append("<a id='selector' class='cpcHead'>?</a>");
$('#sort-campaigns-spending_model').append("<a id='selector' class='model'>?</a>");
$('#sort-campaigns-daily_spending_limit').append("<a id='selector' class='dailyAd'>?</a>");

//Headlines and New campaign button
$('.model, .limit, .dailyAd, .cpcHead, .newCampaign').mouseover(function() {
    if (!$('#expBubble').length) {
      if ($(this).hasClass('model')) {
        appendDiv(this ,"expBubble", "spendingModel", "Here you will see if your budget is set to spend on a recurring monthly basis or if the budget set is the total budget for the campaign. There are two Spending Model options: Monthly flight & Entire campaign.");
      }
      if ($(this).hasClass('limit')) {
        appendDiv(this ,"expBubble", "", "This is your budget for your campaign. It is the maximum you are willing to spend within the set timeframe for your campaign");
      }
      if ($(this).hasClass('dailyAd')) {
        appendDiv(this ,"expBubble", "dailyAdHead", "This is how your campaign will spend its budget on a daily basis. There are three options: Balanced, Accelerated and Strict.");
      }
      if ($(this).hasClass('cpcHead')) {
        appendDiv(this ,"expBubble", "cpc", "Cost Per Click, is the amount of money you will pay each time a user clicks on your campaign item.");
      }
      if ($(this).hasClass('newCampaign')) {
        appendDiv(this ,"expBubble", "campaignBox", "Click to open a new campaign");
      }
    }
});
$('.model, .limit, .dailyAd, .cpcHead, .newCampaign').mouseleave(function() {
    $('#expBubble').remove();
});

//right Tab buttons
$('.activate-border, .properties-border, .EditInventory-border, .DupInventory-border, .newCampaign').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      if ($(this).hasClass('activate-border')) {
        appendDiv(managementBar, "ButtonsBox", "activate", "Click to activate or Pause your campaign.");
      }
      if ($(this).hasClass('properties-border')) {
        appendDiv(managementBar, "ButtonsBox", "properties", "Takes you to the Edit Campaign page, where you can edit your campaign settings including CPC, budget, and targeting.");
      }
      if ($(this).hasClass('EditInventory-border')) {
        appendDiv(managementBar, "ButtonsBox", "inventory", "Takes you to the Campaign Inventory page, where all campaign items are stored.");
      }
      if ($(this).hasClass('DupInventory-border')) {
        appendDiv(managementBar, "ButtonsBox", "duplicate", "Takes you to the New Campaign page, where you can update any of the duplicated campaign properties you want to change.");
      }
      $(this).removeAttr('title');
    }
});

$('.activate-border, .properties-border, .EditInventory-border, .DupInventory-border').mouseleave(function() {
    $('#ButtonsBox').remove();
});

function appendDiv(selector, idName, ClassName, divText) {
    $(selector).append("<div id=" + idName + " class=" + ClassName + ">" + divText +"</div");
}
