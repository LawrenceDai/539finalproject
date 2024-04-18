var console_list = Array.from(document.querySelector("#console-list").children)

for (const child of console_list) {
    console.log(child.dataset.name);
}

// var for sorted and order
var name_sort = false;
var release_sort = false;
var sold_sort = false;
var sort_order;

// var for iterating for loop
var i;

// sort functions
function sort_by_name (mylist) {
    mylist.sort(function (a, b){
        return a.dataset.name.localeCompare(b.dataset.name);
    });
}

function sort_by_release (mylist) {
    mylist.sort(function (a, b){
        return a.dataset.release - b.dataset.release;
    });
}

function sort_by_sold (mylist) {
    mylist.sort(function (a, b){
        return a.dataset.sold - b.dataset.sold;
    });
}

// Sort buttons
const name_button =  document.querySelector("#name");
const release_button = document.querySelector("#release");
const sold_button = document.querySelector("#sold");

// reorder the flex
function reorder() {
    for (i = 0; i < console_list.length; i++) {
        console_list[i].style.order = i;
    }
}

// button functions
name_button.addEventListener("click", function () {
    if (!name_sort) {
        sort_by_name(console_list);
        name_sort = true;
        release_sort = false;
        sold_sort = false;
        sort_order = true;
        release_button.innerHTML = "Release Date";
        sold_button.innerHTML = "Units Sold";
    } else {
        console_list = console_list.reverse();
        sort_order = !sort_order;
    }
    name_button.innerHTML = "Name" + (sort_order ? ' &#x2193' : ' &#x2191');
    reorder();
})

release_button.addEventListener("click", function () {
    if (!release_sort) {
        sort_by_release(console_list);
        name_sort = false;
        release_sort = true;
        sold_sort = false;
        sort_order = true;
        name_button.innerHTML = "Name";
        sold_button.innerHTML = "Units Sold";
    } else {
        console_list = console_list.reverse();
        sort_order = !sort_order;
    }
    release_button.innerHTML = "Release Date" + (sort_order ? ' &#x2193' : ' &#x2191');
    reorder();
})

sold_button.addEventListener("click", function () {
    if (!sold_sort) {
        sort_by_sold(console_list);
        name_sort = false;
        release_sort = false;
        sold_sort = true;
        sort_order = true;
        name_button.innerHTML = "Name";
        release_button.innerHTML = "Release Date";
    } else {
        console_list = console_list.reverse();
        sort_order = !sort_order;
    }
    sold_button.innerHTML = "Units Sold" + (sort_order ? ' &#x2193' : ' &#x2191');
    reorder();
})