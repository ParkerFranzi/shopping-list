$(function() {

    $("#js-shopping-list-form").submit(function(event){
        //prevent default submit reload
        event.preventDefault();
        //get the value of the input item
        const item = $("#shopping-list-entry").val();
        //add the item to the shopping list
        $(".shopping-list").append(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </li>`);
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });
})