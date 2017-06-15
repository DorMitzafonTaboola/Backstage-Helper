var managementBar = document.getElementsByTagName('tbody');
var Headlines = document.getElementsByTagName('thead')['0'].firstChild.children;
var HeadlinesIndex = 5;

if (managementBar['0'].firstChild.cells.length == 13)
{
    var rightEndTabs = managementBar['0'].firstChild.cells[12].children;
    HeadlinesIndex = 6;
}
else
{
    var rightEndTabs = managementBar['0'].firstChild.cells[11].children;
}

rightEndTabs[0].classList.add('activate-border');
rightEndTabs[1].classList.add('properties-border');
rightEndTabs[2].classList.add('EditInventory-border');
rightEndTabs[3].classList.add('DupInventory-border');

Headlines[HeadlinesIndex].classList.add('headline-border');
Headlines[HeadlinesIndex + 2].classList.add('headline-border');
