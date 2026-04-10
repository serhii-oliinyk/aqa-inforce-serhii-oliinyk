# aqa-inforce-serhii-oliinyk

Automation testing framework for UI and API testing using Playwright.

Project structure

tests/
  API/
    auth.js
    CRUD_Room.spec.js
    sharedData.js

  UI/
    booking.spec.js
    booking-invalid.spec.js
    booking-unavailable.spec.js

Other files:
playwright.config.js - Playwright configuration
package.json - project dependencies and scripts
playwright-report/ - HTML report
test-cases.txt - manual test cases

Installation

npm install
npx playwright install

Run tests

Run all tests:
npx playwright test

Run UI tests:
npx playwright test tests/UI

Run API tests:
npx playwright test tests/API

Run single test:
npx playwright test tests/UI/booking.spec.js

Test report

npx playwright show-report

Configuration

Base URL is defined in playwright.config.js:

use: {
  baseURL: 'https://automationintesting.online'
}

Test coverage

UI tests:
- Booking flow
- Invalid booking scenarios
- Unavailable dates validation

API tests:
- Authentication
- CRUD operations for rooms
- Shared test data handling

