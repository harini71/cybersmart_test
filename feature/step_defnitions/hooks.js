import { After, Before, setDefaultTimeout, Status } from 'cucumber';
import { ShoppingListPage } from '../src/pages/shopping_list_page.js';

//INITIALISE PAGES

Before({ tags: '@shopping_list_page' }, async function () {
    this.shopping_list_page = new ShoppingListPage();
});
