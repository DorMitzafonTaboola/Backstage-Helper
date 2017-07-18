//Campaign Management
var managementBar = $('tr:first-child td:last-child');
$('.activate-border').unbind('mouseover');
$('.properties-border').unbind('mouseover');
$('.EditInventory-border').unbind('mouseover');
$('.DupInventory-border').unbind('mouseover');

$(managementBar).find('a:first-child').removeClass('activate-border');
$(managementBar).find('.fa-pencil').first().parent().removeClass('properties-border');
$(managementBar).find('.fa-list').first().parent().removeClass('EditInventory-border');
$(managementBar).find('.fa-files-o').first().parent().removeClass('DupInventory-border');
$('#sort-campaigns-spending_limit').find('#selector').remove();
$('#sort-campaigns-cpc').find('#selector').remove();
$('#sort-campaigns-spending_model').find('#selector').remove();
$('#sort-campaigns-daily_spending_limit').find('#selector').remove();
$('#btn-new-campaign').removeClass('newCampaign');
