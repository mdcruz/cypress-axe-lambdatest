# cypress-axe-lambdatest

A simple project to demonstrate cypress-axe and how to run it on LambdaTest Cypress grid.

# Pre-requisites

- [Node](https://nodejs.org/en/download/) (LTS version)

# Setup

Clone this project locally by:

```bash
git clone
cd cypress-axe-lambdatest
```

To install the project dependencies, type `npm i`.

# Running tests locally

To run the tests, type `npx cypress open` to run it via the Cypress test runner or `npx cypress run` to run it headlessly.

# Running tests on LambdaTest

Install the lambdatest-cypress-cli by typing `npm i -g lambdatest-cypress-cli`.

To get an access key, create a free account in LambdaTest and add in your username and auth_key in the `lambdatest-config.json`.

Finally, to run the tests, use the command `lambdatest-cypress run`.
