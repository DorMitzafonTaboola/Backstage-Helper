//Buttons on right side
var managementBar = $('tr:first-child td:last-child');
$(managementBar).find('a:first-child').addClass('activate-border');
$(managementBar).find('.fa-pencil').first().parent().addClass('properties-border');
$(managementBar).find('.fa-list').first().parent().addClass('EditInventory-border');
$(managementBar).find('.fa-files-o').first().parent().addClass('DupInventory-border');

//Headlines
$('#sort-campaigns-spending_limit, #sort-campaigns-cpc, #sort-campaigns-daily_spending_limit').css("text-align","left");
$('#sort-campaigns-spending_limit').append("<a id='selector' class='limit'>?</a>");
$('#sort-campaigns-cpc').append("<a id='selector' class='cpcHead'>?</a>");
$('#sort-campaigns-spending_model').append("<a id='selector' class='model'>?</a>");
$('#sort-campaigns-daily_spending_limit').append("<a id='selector' class='dailyAd'>?</a>");

//Spending Model headline
$('.model').mouseover(function() {
    if (!$('#expBubble').length) {
      $(this).append("<div id='expBubble' class='spendingModel'>Here you will see if your budget is set to spend on a recurring monthly basis or if the budget set is the total budget for the campaign. There are two Spending Model options: Monthly flight & Entire campaign.</div>");
    }
});
$('.model').mouseleave(function() {
    $('#expBubble').remove();
});

//Spending Limit headline
$('.limit').mouseover(function() {
    if (!$('#expBubble').length) {
      $(this).append("<div id='expBubble'>This is your budget for your campaign. It is the maximum you are willing to spend within the set timeframe for your campaign.</div>");
    }
});
$('.limit').mouseleave(function() {
    $('#expBubble').remove();
});

//Daily Ad Delievry headline
$('.dailyAd').mouseover(function() {
    if (!$('#expBubble').length) {
      $(this).append("<div id='expBubble' class='dailyAdHead'>This is how your campaign will spend its budget on a daily basis. There are three options: Balanced, Accelerated and Strict.</div>");
    }
});
$('.dailyAd').mouseleave(function() {
    $('#expBubble').remove();
});

//CPC headline
$('.cpcHead').mouseover(function() {
    if (!$('#expBubble').length) {
      $(this).append("<div id='expBubble' class='cpc'>Cost Per Click, is the amount of money you will pay each time a user clicks on your campaign item.</div>");
    }
});
$('.cpcHead').mouseleave(function() {
    $('#expBubble').remove();
});

$('.activate-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='activate'>Click to activate or Pause your campaign.</div>");
      $(this).removeAttr('title');
    }
});

$('.activate-border').mouseleave(function() {
    $('.activate').remove();
});

$('.properties-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='properties'>Takes you to the Edit Campaign page, where you can edit your campaign settings including CPC, budget, and targeting.</div>");
      $(this).removeAttr('title');
    }
});

$('.properties-border').mouseleave(function() {
    $('.properties').remove();
});

$('.EditInventory-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='inventory'>Takes you to the Campaign Inventory page, where all campaign items are stored.</div>");
      $(this).removeAttr('title');
    }
});

$('.EditInventory-border').mouseleave(function() {
    $('.inventory').remove();
});

$('.DupInventory-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='duplicate'>Takes you to the New Campaign page, where you can update any of the duplicated campaign properties you want to change.</div>");
      $(this).removeAttr('title');
    }
});

$('.DupInventory-border').mouseleave(function() {
    $('.duplicate').remove();
});
