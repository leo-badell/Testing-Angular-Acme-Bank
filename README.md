# Acme Bank Automation Tests

Welcome to the Acme Bank Automation Test Suite! This repository contains end-to-end tests written in Cypress, utilizing JavaScript syntax and Chai assertions. The tests cover critical functionalities related to fund transfers and portfolio management.

## Overview

This Cypress test suite ensures the robustness of Acme Bank's transfer and portfolio features (you'll find the website in the following link => https://usdemo.vee24.com/). The tests are designed to validate the seamless functionality of these key components in the banking application.

![Angular Acme Bank - Portfolio](https://github.com/leo-badell/Testing-Angular-Acme-Bank/assets/91019951/cdefa031-1c85-41f9-b80c-fc1c0dfad7aa)


## Test Scenarios

### 1. Transfer Money

The `transfer.spec.js` file includes tests for making a fund transfer. The following steps are covered:

- Access the transfer page
- Verify transfer information
- Select accounts and enter transfer details
- Initiate the fund transfer

### 2. Portfolio Management

The `portfolio.spec.js` file focuses on the portfolio management functionality. The tests cover:

- Accessing the portfolio page
- Checking portfolio details
- Verifying investment information
- Interacting with a pie chart

## Getting Started

To run the tests locally, follow these steps:

1. Clone this repository to your local machine.
2. Install Cypress by running `npm install`.
3. Run the Cypress tests using the command `npm run cypress:open`.

Ensure that your application is running and accessible before executing the tests. The Cypress Test Runner provides an interactive environment to view and debug test results.


