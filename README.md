# Signup Form & Dashboard

A small front-end project for creating and managing account entries. It provides a responsive signup form with client-side validation and a dashboard that displays the accounts saved in the current browser.

## How to run the project

No installation, server, or package manager is required.

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`, or right-click it and choose **Open with** → a web browser.

The form will open in the browser. Create an account to see it appear in the dashboard below the form.

## Features implemented

- Signup form with full name, email address, and password fields.
- Full-name validation: names must contain at least 3 characters.
- Email validation using a regular expression to check a format such as `name@example.com`.
- Password validation requiring at least 8 characters, an uppercase letter, lowercase letter, number, and symbol.
- Clear inline validation messages instead of browser alert popups.
- Show/hide password button for easier password entry.
- Duplicate-email check to prevent the same email being added twice.
- Dashboard that lists saved account names and email addresses.
- Account counter and an empty-state message when no accounts have been created.
- Remove button for deleting an account from the dashboard.
- Responsive design that works on desktop and smaller mobile screens.

## Additional improvements

- Account data is stored with browser `localStorage`, so entries stay available after refreshing the page in the same browser.
- Passwords are **not** saved. Only the name and email address are stored.
- DOM elements are created with JavaScript instead of inserting user input with HTML strings. This keeps displayed text safer.
- The form uses accessible labels, helpful input descriptions, and live status messages for screen-reader users.

## Concepts learned

- **HTML forms:** creating labelled input fields and handling form submission.
- **JavaScript DOM manipulation:** selecting elements, responding to events, and creating dashboard entries dynamically.
- **Form validation:** checking user input before it is accepted, including regular expressions (regex) for email and password rules.
- **Local storage:** saving and retrieving simple browser data with `localStorage` and `JSON`.
- **Arrays and objects:** storing account entries as JavaScript objects and removing entries by index.
- **CSS layout and responsive design:** using Flexbox, Grid, media queries, and reusable style variables.
- **Accessibility basics:** using semantic elements, input labels, ARIA descriptions, and status updates.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure: signup form and dashboard. |
| `style.css` | Styling, responsive layout, and validation-state visuals. |
| `script.js` | Validation, local storage, account rendering, and removal logic. |

## Note

This is a front-end learning project. Because it does not have a backend or database, its account entries are saved only in the browser where they were created. Clearing that browser's site data will remove the saved entries.

## Demo video

[Watch the project demo](https://drive.google.com/file/d/1ckAP3IqKPx3nkQ8rxARjzjNJdYWtNYUE/view?usp=sharing)
