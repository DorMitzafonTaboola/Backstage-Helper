//Buttons on right side
var managementBar = $('tr:first-child td:last-child');
$(managementBar).find('a:first-child').addClass('activate-border');
$(managementBar).find('.fa-pencil').first().parent().addClass('properties-border');
$(managementBar).find('.fa-list').first().parent().addClass('EditInventory-border');
$(managementBar).find('.fa-files-o').first().parent().addClass('DupInventory-border');

//Headlines
$('#sort-campaigns-spending_limit').addClass('headline-border');
$('#sort-campaigns-cpc').addClass('headline-border');

//Spending Limit headline
$('#sort-campaigns-spending_limit').mouseover(function() {
    if (!$('#Box').length) {
      $(this).append("<div id='Box' class='SpendingLimit'>This is your budget for your campaign. It is the maximum you are willing to spend within the set timeframe for your campaign</div>");
    }
});
$('#sort-campaigns-spending_limit').mouseleave(function() {
    $(this).find('.SpendingLimit').remove();
});

//CPC headline
$('#sort-campaigns-cpc').mouseover(function() {
    if (!$('#Box').length) {
      $(this).append("<div id='Box' class='cpc'>Cost Per Click, is the amount of money you will pay each time a user clicks on your campaign item</div>");
    }
});
$('#sort-campaigns-cpc').mouseleave(function() {
    $(this).find('.cpc').remove();
});

$('.activate-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='activate'>Click to activate or Pause your campaign</div>");
      $(this).removeAttr('title');
    }
});

$('.activate-border').mouseleave(function() {
    $('.activate').remove();
});

$('.properties-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='properties'>Takes you to the Edit Campaign page, where you can edit your campaign settings including CPC, budget, and targeting</div>");
      $(this).removeAttr('title');
    }
});

$('.properties-border').mouseleave(function() {
    $('.properties').remove();
});

$('.EditInventory-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='inventory'>Takes you to the Campaign Inventory page, where all campaign items are stored</div>");
      $(this).removeAttr('title');
    }
});

$('.EditInventory-border').mouseleave(function() {
    $('.inventory').remove();
});

$('.DupInventory-border').mouseover(function() {
    if (!$('#ButtonsBox').length) {
      $(managementBar).append("<div id='ButtonsBox' class='duplicate'>Takes you to the New Campaign page, where you can update any of the duplicated campaign properties you want to change</div>");
      $(this).removeAttr('title');
    }
});

$('.DupInventory-border').mouseleave(function() {
    $('.duplicate').remove();
});
