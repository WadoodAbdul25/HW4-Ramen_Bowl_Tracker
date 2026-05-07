# Ramen Order Tracker


## What it does

The app lets you track orders across three categories:

- **Noodle Type** — Thin, Thick, or Udon
- **Meat Type** — Tofu, Chicken, or Beef
- **Spice Level** — Mild, Medium, or Hot

Every time you click a button, the count goes up. Once at least one order is recorded, a statistics panel appears below showing a breakdown of all the orders, including the percentage each option makes up of the total and which one is the most popular in each category. If nothing has been clicked yet, it just says "No data collected yet" — no point showing a bunch of zeroes.

There's also a Reset All button at the bottom of the order panel that clears everything back to zero.

## How the code is structured

The app is broken into a few components, each with a specific job:

- **`App.jsx`** — This is the brain of the whole thing. It holds all the state (nine `useState` hooks, one for each button), defines the event handler functions, and passes everything down to the child components as props. Nothing stateful lives anywhere else.

- **`Button.jsx`** — A dead simple component. It takes two props: the text to display and the click handler to run. That's it. It doesn't know or care what it's counting.

- **`Statistics.jsx`** — Receives all the counts from App and renders the stats panel. If the grand total is zero it bails early and shows the "no data" message instead. Otherwise it lays out three category cards, each showing the counts, percentages, and most popular pick.

- **`StatisticLine.jsx`** — Renders a single row in a stats table. Just a label and a value, wrapped in a `<tr>`. Reused across all three category cards.



## Tech used

- [React](https://react.dev/) with hooks (`useState`)
- [Vite](https://vitejs.dev/) for bundling and the dev server
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
- Plain CSS — no libraries, just hand-written styles
