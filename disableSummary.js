// Campaign Summary
var reportTabs = $('#report-tabs');
$('.legend-container').unbind('mouseover');
$(reportTabs).find('#tab-byperiod').unbind('mouseover');
$(reportTabs).find("[data-target='#campaign_breakdown']").unbind('mouseover');
$(reportTabs).find("[data-target='#site_breakdown']").unbind('mouseover');
$(reportTabs).find('#tab-bygeo').unbind('mouseover');
$(reportTabs).find("[data-target='#platform_breakdown']").unbind('mouseover');
$(reportTabs).find("[data-target='#platform_breakdown']").unbind('mouseover');
$(reportTabs).find("[data-target='#user_segment_breakdown']").unbind('mouseover');

$(reportTabs).find('a').removeClass('toolBar-border');
$('.perspective-container').removeClass('dateBox');
$('.legend-container').removeClass('statusBox');
