# Country-State-City Dependent Selector App

This is a simple React.js application that allows users to select a country, state, and city. The application uses the `country-state-city` package to fetch data for countries, states, and cities, which are displayed in dropdown selectors that update dynamically based on user input.

## Features

- Select a country from a dropdown.
- Select a state based on the selected country.
- Select a city based on the selected state.
- Uses the `country-state-city` package to fetch country, state, and city data dynamically.

Usage
1- When you load the app, you'll be presented with three dropdown selectors: Country, State, and City.
2- Select a Country from the dropdown.
3- Once the country is selected, the State dropdown will be populated with states corresponding to the chosen country.
4- After selecting a State, the City dropdown will update to show cities that belong to the selected state.
5- The options in the State and City dropdowns are dynamically fetched using the country-state-city package.

Dependencies
1- React.js: A JavaScript library for building user interfaces.
2- country-state-city: A package used to fetch country, state, and city data
