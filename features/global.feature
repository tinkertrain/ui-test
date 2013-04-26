Feature: Global Resources
  In order to test our application

  Scenario: it serves our main page
    Given I am on homepage
    Then the page should have navigation
    And their should be an article
    And the article title should be "Most lip-smacking street food"

