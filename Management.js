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
    $(this).append("<div id='Box' class='SpendingLimit'>Shows the spending limit of each campaign</div>");
});
$('#sort-campaigns-spending_limit').mouseleave(function() {
    $(this).find('.SpendingLimit').remove();
});

//CPC headline
$('#sort-campaigns-cpc').mouseover(function() {
    $(this).append("<div id='Box' class='cpc'>Shows the Cost-per-Click of each campaign</div>");
});
$('#sort-campaigns-cpc').mouseleave(function() {
    $(this).find('.cpc').remove();
});
