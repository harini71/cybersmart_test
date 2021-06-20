Feature: As a user, I can build my shopping list and save it for future reference


  Scenario: Happy path journey - new user
    Given I am a new  user logged in
    And click on create shopping list
    When I add items to my shopping list
    Then I should see my shopping list with added items
    And I can use the same for future referal