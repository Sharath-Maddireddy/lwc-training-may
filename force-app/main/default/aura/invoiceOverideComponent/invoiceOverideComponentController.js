({
    handleNavigate : function(component, event, helper) {
        var navService = component.find("navService");
        event.preventDefault();
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };
        navService.navigate(pageReference);
    }
})