Feature: Create a new company
    In order to have companies in the platform
    As a user with admin permissions
    I want to create a new company

    Scenario: A valid non existing company
    Given I send a PUT request to "/companies/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "name": "Test Company",
        "socialReason": "TEST COMPANY S.L.",
        "email": "test@company.test",
        "prefixNumber": "+34",
        "number": "999999999",
        "streetAddress1": "Street test 1",
        "streetAddress2": "Street test 2",
        "city": "Terrassa",
        "region": "Barcelona",
        "country": "Spain",
        "postalCode": "08223",
        "lat": 9999,
        "long": 123
    }
    """
    Then the response status code should be 201
    And the response should be empty