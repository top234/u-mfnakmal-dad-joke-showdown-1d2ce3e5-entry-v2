[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/top234/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry-v2/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/top234/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry-v2/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

# The Introvert Bakery

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) on make.fun — one dad joke, at most 200 characters, judged by how big a groan it earns.

## The joke

> My dad opened a bakery for introverts. No tables, no small talk — just a sign on the wall: 'Knead no one.'

The pun is the sign itself: "knead no one" — a baker who kneads dough, serving customers who need no one. Straight-faced setup, punchline at the very end.

## How it works

`main.ts` (Node standard library only, no network) validates the joke is 1–200 characters, then writes it to `$OUTPUT_DIR/entry.txt` (default `/output`).

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
