var inventoryCampaign = $('tbody tr:first-child');

$(inventoryCampaign).addClass('campaign-item');

$(inventoryCampaign).mouseover(function() {
    $(this).addClass('highlight-parent');
    $(this).children().addClass('highlight');
    $('td').addClass('special');
    $(this).find('td span').css('color', 'black');
    // $(this).children().toggleClass('special');
});

$(inventoryCampaign).mouseleave(function() {
    $(this).children().removeClass('highlight');
    $(this).removeClass('highlight-parent');
    $('td').removeClass('special');
    $(this).find('td span').css('color', 'green');
});
