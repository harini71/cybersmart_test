import { Then, When } from 'cucumber';

Given('I click on create new shopping list', async function() {
    await this.verifyNewShoppingList()

});

when ('I add items to the shopping list', async function(){
    await  this.addNewItems()
    await this.deleteItems()
    await this.updateItems()
});

Then ('I should see my shopping list with added items',async function(){
    await this.useShoppingListForFutureReferral();
});