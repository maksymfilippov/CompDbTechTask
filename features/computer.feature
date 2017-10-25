Feature:  Sample application — Computer database 
  As a user of http://computer-database.herokuapp.com/computers
  I should be able to check  "Sample application — Computer database" 
  Tap on 'Add new computer' button
  In order to check that creating form is available , and mandatory fields are highlighted in red

Scenario Outline: Computer validation
 @validation
 Scenario: Check index page
 Given I navigate to index page
 Then I see that index page is opened
 And I see that index page has title: "Computers database"
 And I see that App has header: "Play sample application — Computer database"
 And I see that 'Filter' input is visible
 And I see that 'Filter' submit button is visible
 And I see that 'Add new computer' button is visible
 And I see that page has table with "4" columns
 And I see that 'Pagination' block is visible
 
 @validation
 Scenario: Check computer creating form
 Given I navigate to index page
 When I click 'Add new Computer' button
 Then I see that AddNewComputer page is opened
 And I see that AddNewComputer page has title: "Computers database"
 And I see that App has header: "Play sample application — Computer database"
 And I see that 'Computer name' field is visible
 And I see that label for 'Computer name' field is visible
 And I see that 'Introduced date' field is visible
 And I see that label for 'Introduced date' field is visible
 And I see that 'Discontinued date' field is visible
 And I see that label for 'Discontinued date' field is visible
 And I see that 'Company' combo-box is visible
 And I see that label for 'Company' combo-box is visible
 And I see that 'Create this computer' button is visible
 And I see that 'Cancel' button is visible
 
@validation
 Scenario: Computer should be added after filling all the inputs
 Given I navigate to index page
 And I click 'Add new Computer' button
 When I add new computer with data: "SuperMac", "2017-10-24", "2017-10-25", "Apple Inc"
 When I find computer by name: "SuperMac"
 Then I see that finded data is shown : "SuperMac", "2017-10-24", "2017-10-25", "Apple Inc"

 