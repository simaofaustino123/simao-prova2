 var tableController = {
    
    init: function(params) {
        tableController.setForm();
        tableController.displayNames();
    },
    
    setForm: function () {
        var form = document.getElementById('form-products');
        form.addEventListener('submit', tableController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault(); //we need this to avoid the form submittion to a server
        var inputName = document.getElementById('name');
        tableController.addName(inputName.value);
        inputName.value = "";
           },
    
    addName: function(name) {
        tableService.addName(name);
        HTMLService.displayAddedName(name);
    },
    
    displayNames: function() {
        var names = tableService.getList();
        names.forEach(HTMLService.displayAddedName);
    }
};

//initialization
tableController.init();