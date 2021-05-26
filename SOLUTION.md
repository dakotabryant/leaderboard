## Condsiderations

With this project there were a few considerations up front. My first thought was deciding how we were actually going to make the leaderboard "real time", and we had a few options. I considered the following:

- WebSocket - I thought about setting up some websockets and avoiding any polling by emitting an event from the server on a set interval. We would also just emit events to the "room" for things like shelling, but ultimate this would have required some substantial reworks to the backend that time didn't allow for. 
- SSE - Sort of the same mentality with Websockets, but with a bit more limitation with SSE. Because we need a consistent stream of data from the BE, SSE wouldn't have worked out too well given that the client is only doing a mutative action on "shell" and sending an event on each race change is expensive and wouldn't give the client the ability to actually pause those events. 
- Polling - I ultimate landed on a short-polling strategy as it was the quickest to implement, made the most sense for our data needs, and would easily allow us to swap something else in down the road if we needed to scale in a different direction. 

## Challenges 

On the outset there's a few things that stood out to me as challenges:
- Data consistency - Because the data is inconsistent in its shape, having a shared Leaderboard component makes it a little tougher and lends itself to some code jank. Because of the inconsistency I decided to land on using the "items" data structure as the "default" and our racers as the one-off. If I were working with this in prod I'd either opt for some data normalization at the source, or create a custom hook that normalizes it for us on the FE. At the end of the day though, I don't particularly like manipulating the data just to display it. 
- Continuity of data - I was a bit worried at first about the possibility of pausing the polling and then shelling a driver, etc but in practice this didn't prove to be the issue that I thought it would since we're not using the FE to actually store any of the racer data, just display it. 

## Features
I decided to implement as many of the stretch features I could, including a couple of my own. A couple of thoughts:
- Styling for this was fun, just pulled some inspiration from the styles from the actual game. 
- Pausing the updates was fairly easy to implement as it just depends on a hook that toggles whether or not we should pass "null" in to the useInterval hook
- I added a mapping system for Character portraits. Small feature, but ultimate I think it adds to the overall UX of the leaderboard in following the racers

### Things I did not implement and why
- I started to add the user based input for time increments as is evidence by the parameter for "interval" in useInterval. It would be pretty straightforward to add a controlled input that has that the state passed in to the useInterval hook
- I also started to add a "Join the race" feature but was also limited by time. My thought was to have a "Name", "Speed", and then randomly roll on the "bad luck" property. This would add your racer to the race and assign them the "?" portrait as we don't have a mapping for a character. Future iterations to this include something like an "Avatar Selector" etc

## Final thoughts
This was a fun project and I'm a little bummed I ran out of time. I probably could have spent a LITTLE less time on styles or more time working with the BE, but ultimately I think it came out looking nice and working well. 

