# netflixdb

A chrome extension to add imdb scores to netflix titles.

## About

This app grew out of my frustration with netflix's lack of transparency regarding moving ratings. "76% Match" What does that even mean? Too many times after  realizing a show I had started had a 20% score on Rotten Tomatoes I decided to see if it would be possible to add IMDB scores. Unfortunately Rotten Tomatoes doesn't maintain a public API. 

## Challenges

- Chrome Extensions don't use frameworks which meant working with raw javascript
- Understanding the permissions and how the background scripts could be used to create the desired functionality
- Grabbing the movie titles from Netflix's dynamic site structure.

## Future Features

- Rather than add IMDB to a table, add the actual score inside netflix
- Restructure the IMDB API requests to be faster
- Find a source for Rotten Tomatoe's data
