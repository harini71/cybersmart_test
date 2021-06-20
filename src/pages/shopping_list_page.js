import { render, screen } from '@testing-library/react';
import App from './App';

class shopping_list_page {

    async verifyNewShoppingList(){
        await this.clickCreateANewShoppingList({});
        await this.enterTextField({});
        await this.clickElement({});
    }

    async addNewItems(){
        await this.enterTextInputField({});
        await this.clickElement({});
  }

  async deleteItems(){
        await this.clickOnCheckbox({});
        await this.clickOnClose({});
  }
  async updateItems(){
        await this.deleteItems();
        await this.addNewItems();
  }

  async useShoppingListForFutureReferral(){
        await this.verifyNewShoppingList();
        await this.addNewItems();
        await this.deleteItems();
        await this.updateItems();

  }
}