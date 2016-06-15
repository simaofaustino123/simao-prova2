var HTMLService = {
    
    displayAddedName: function (name) {
        var listItem = HTMLService.createListItem(name);
        HTMLService.addToList(listItem);
    },
    
    createListItem: function(text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;
    },
    
        
    addToList: function (listItem) {
        var unOrderedList = document.getElementById('list-products');
        unOrderedList.appendChild(listItem);
    }
};