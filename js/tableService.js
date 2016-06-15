var tableService = {

    names: [],

    getList: function () {
        tableService.loadNames();
        return tableService.names;
    },

    addName: function (name) {
        tableService.names.push(name);
    },

    loadNames: function () {
        var namesJsonText = window.localStorage.getItem('list-products');
        if(namesJsonText) {
            tableService.names = JSON.parse(namesJsonText);
        }
    },

    saveNames: function () {
        var namesJsonText = JSON.stringify(tableService.names);
        window.localStorage.setItem('list-products', namesJsonText);
    }


};