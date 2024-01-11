## Description

The GitHub User Search App enables users to search for GitHub users in real-time, without the need for an ENTER keypress or a submit button.
--> github-user-search-intermediaire-senior

## Features

- Query against Github Api: GET https://api.github.com/search/users?q={USER}.
- Try to not add any dependency library on a freshly created create react app (Only testing libraries accepted).
- Don't forget to check against modern ways to make HTTP requests on frontend side.
- Manage edge cases:
  No results
  Github api rate limit
  User type in quickly and going back and forth on his search
- Add a checkbox on each card item
- Add a checkbox for select all cards with the number of selected items
- Add two actions depending selected items
- Duplicate items
- Delete items

++ BONUS: Add an edit mode

## Usage

After cloning the repository, run start.
Simply start typing in the search bar to see live results of GitHub users.
Use the checkboxes on each user card or the select/de-select all checkbox for bulk actions.
With users selected, choose to either duplicate or delete cards using the respective buttons.
Enable or disable edit mode to show or hide interactive features.

## Notes

I assumed that the card has to have a fixed width of 100px, I've added a truncate function when the login name doesn't fit the card.
