# Reactive Take Home Exercise

Howdy! 👋

Here is a coding exercise to help us understand how you build products. The purpose of this exercise is to provide an example that we can talk through the pros and cons of in our next chat. Please, spend no more than 4 hours on this. We understand we may not be the only company asking for an exercise from you and want to be respectful of your time. 

At four hours, please feel free to stop working and explain what refactors and enhancements you would have made with more time in the provided
SOLUTION.md file.

If you have any questions at any point during the exercise, please reach out to hiring@reactive.live.


## Setup Requirements

- [Install Docker](https://www.docker.com/products/docker-desktop)

## Overview

This project shows a leaderboard of an **endless** Mario Kart race. Check it out:

Start the project:
```bash
docker-compose up
```

[View](http://localhost:3000) the leaderboard. 

Currently, this leaderboard fetches the current race results on page load. That's it. That's not very *cool*. Let's make it better.

## Tasks

1. Enhance the [leaderboard component](./leaderboard/src/leaderboard/leaderboard.js) so that it updates in real-time.
2. Add an animation to show the changing position of each racer.
3. Allow users to ['shell'](http://localhost:5000/api/racers/#shell-a-racer) racers to impede their progress. 
4. Make the leaderboard generic so that it can be used display different types of leaderboard data. Demo your solution by displaying the [items leaderboard](http://localhost:5000/api/leaderboards/#get-a-leaderboard) in addition to the race leaderboard.


## Stretch Tasks (Choose any, or none!)

- Style the leaderboard.
- Make the real-time update "pausable". i.e. The user should be able to toggle the real-time update off so they can inspect the results. The user should then be able to turn the real-time update on again to view the race's progress.
- Make the real-time update interval configurable. i.e. The user should be able to set how often they want their leaderboard to refresh. 
- Add a feature of your choosing. Explain why you thought it was cool in [`SOLUTION.md`](./SOLUTION.md).

## Requirements

- Your implementation should be as reusable and generic as possible. 
- Your solution should show updates as real-time as possible.
- Your submission should work correctly in Chrome, don’t worry about cross-browser compatibility.
- Document your thinking behind your solution in [`SOLUTION.md`](./SOLUTION.md).
- Ensure that we can use `git log` to view your processes solving the test.

## Submitting

Please `git commit` all of your changes in this repository. When you're finished:

1. Rename this directory to be `${yourFirstName}-${yourLastName}`.
2. Create a zip of this directory (without `node_modules` if you've installed it locally) and submit it to [google drive](https://forms.gle/2RNm5PqFiUa9ueE29).
3. Email hiring@reactive.live to let us know you're done. Thank you!

## Note

- If you're clicking on the links in this README and they don't work, start the project with `docker-compose up`.
