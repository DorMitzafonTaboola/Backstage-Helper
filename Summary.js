//#Campaign summary
var reportTabs = $('#report-tabs');
$(reportTabs).find('a').addClass('toolBar-border');
$(reportTabs).children().css("position", "relative");

$('.legend-container').mouseover(function() {
    $(this).addClass('highlight');
    $(this).children().find('label').addClass('font-change');
});

$('.legend-container').mouseleave(function() {
   $(this).removeClass('highlight');
   $(this).children().find('label').removeClass('font-change');
});


//By Day tab
$(reportTabs).find('#tab-byperiod').mouseover(function() {
    $(this).append("<div id='DayBox' class='tabBox'>This report will show your campaigns data by Day, Week or Month. Select the tab and choose Day, Week or Month according to the period you want to analyze.</div>");
});
$(reportTabs).find('#tab-byperiod').click(function() {
    $(this).find('.tabBox').remove();
});
$(reportTabs).find('#tab-byperiod').mouseleave(function() {
    $(this).find('.tabBox').remove();
});
//End By Day

//By Campaign tab
$(reportTabs).find("[data-target='#campaign_breakdown']").mouseover(function() {
    $(this).append("<div id='DayBox' class='CampaignBox'>Press and this report will show your campaigns data by campaign</div>");
});
$(reportTabs).find("[data-target='#campaign_breakdown']").mouseleave(function() {
    $(this).find('.CampaignBox').remove();
});
// End By Campaign

//By Site tab
$(reportTabs).find("[data-target='#site_breakdown']").mouseover(function() {
    $(this).append("<div id='DayBox' class='SiteBox'>Press and this report shows your campaigns data by traffic source (website)</div>");
});
$(reportTabs).find("[data-target='#site_breakdown']").mouseleave(function() {
    $(this).find('.SiteBox').remove();
});
//End By Site

//By Country tab
$(reportTabs).find('#tab-bygeo').mouseover(function() {
    $(this).append("<div id='DayBox' class='tabBox'>This report will show your campaigns data by Country, Region or DMA. Select the tab and choose Country, Region or DMA (DMA for us traffic only).</div>");
});
$(reportTabs).find('#tab-bygeo').click(function() {
    $(this).find('.tabBox').remove();
});
$(reportTabs).find('#tab-bygeo').mouseleave(function() {
    $(this).find('.tabBox').remove();
});
//End By Country

//By Platform Tab
$(reportTabs).find("[data-target='#platform_breakdown']").mouseover(function() {
    $(this).append("<div id='DayBox' class='PlatformBox'>Press and this report will show your campaigns data by platform</div>");
});
$(reportTabs).find("[data-target='#platform_breakdown']").mouseleave(function() {
    $(reportTabs).parent().find('.PlatformBox').remove();
});
//End By Platform

//By AM tab
// $(reportTabs).find('#tab-byrep').mouseover(function() {
//     $(this).append("<div id='DayBox' class='AMBox'>Select campaign summary by Account Manager</div>");
// });
// $(reportTabs).find('#tab-byrep').click(function() {
//     $(reportTabs).parent().find('.AMBox').remove();
// });
// $(reportTabs).find('#tab-byrep').mouseleave(function() {
//     $(reportTabs).parent().find('.AMBox').remove();
// });
//End By AM

//By Audience Tab
$(reportTabs).find("[data-target='#user_segment_breakdown']").mouseover(function() {
    $(this).append("<div id='DayBox' class='AudienceBox'>Press and this report will show your campaign data by audience</div>");
});
$(reportTabs).find("[data-target='#user_segment_breakdown']").mouseleave(function() {
    $(reportTabs).parent().find('.AudienceBox').remove();
});
//End By Audience