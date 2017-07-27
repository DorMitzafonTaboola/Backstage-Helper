var reportTabs = $('#report-tabs');
$(reportTabs).find('a').addClass('toolBar-border');
$(reportTabs).children().css("position", "relative");
$('.legend-container').addClass('statusBox');
$('.perspective-container').addClass('dateRange');

//Date Range button
$('.dateRange').mouseover(function() {
    if (!$('#Box').length) {
      $(this).append("<div id='Box' class='dateBox'>Click to change the date range filter.</div>");
    }
});

$('.dateRange').mouseleave(function() {
    $('#Box').remove();
});

//Graph's sideBar
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
    if(!$('#Box').length) {
      $(this).append("<div id='Box' class='tabBox'>This report will show your campaigns data by Day, Week or Month. Select the tab and choose Day, Week or Month according to the period you want to analyze.</div>");
    }
});
$(reportTabs).find('#tab-byperiod').click(function() {
    $('#Box').remove();
});
$(reportTabs).find('#tab-byperiod').mouseleave(function() {
    $('#Box').remove();
});

//By Campaign tab
$(reportTabs).find("[data-target='#campaign_breakdown']").mouseover(function() {
    if(!$('#Box').length) {
      $(this).append("<div id='Box'>This report will show your campaigns data by campaign.</div>");
    }
});
$(reportTabs).find("[data-target='#campaign_breakdown']").mouseleave(function() {
    $('#Box').remove();
});

//By Site tab
$(reportTabs).find("[data-target='#site_breakdown']").mouseover(function() {
    if(!$('#Box').length) {
      $(this).append("<div id='Box'>This report shows your campaigns data by traffic source (website).</div>");
    }
});
$(reportTabs).find("[data-target='#site_breakdown']").mouseleave(function() {
    $('#Box').remove();
});

//By Country tab
$(reportTabs).find('#tab-bygeo').mouseover(function() {
    if(!$('#Box').length) {
      $(this).append("<div id='Box' class='tabBox'>This report will show your campaigns data by Country, Region or DMA. Select the tab and choose Country, Region or DMA (DMA for us traffic only).</div>");
    }
});
$(reportTabs).find('#tab-bygeo').click(function() {
    $('#Box').remove();
});
$(reportTabs).find('#tab-bygeo').mouseleave(function() {
    $('#Box').remove();
});

//By Platform Tab
$(reportTabs).find("[data-target='#platform_breakdown']").mouseover(function() {
    if(!$('#Box').length) {
      $(this).append("<div id='Box'>This report will show your campaigns data by platform.</div>");
    }
});
$(reportTabs).find("[data-target='#platform_breakdown']").mouseleave(function() {
    $('#Box').remove();
});

//By Audience Tab
$(reportTabs).find("[data-target='#user_segment_breakdown']").mouseover(function() {
    if(!$('#Box').length) {
      $(this).append("<div id='Box'>This report will show your campaigns data by audience.</div>");
    }
});
$(reportTabs).find("[data-target='#user_segment_breakdown']").mouseleave(function() {
    $('#Box').remove();
});
