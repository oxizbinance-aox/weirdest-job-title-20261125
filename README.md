# Weirdest Job Title: Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/oxizbinance-aox/weirdest-job-title-20261125/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/oxizbinance-aox/weirdest-job-title-20261125/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Bounty: [Weirdest Job Title: Blind Judge Showdown](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

## The entry

> **Senior Apologizer for Self-Checkout Machines** (44 characters)

One job title, 60 characters max, nothing else. `main.ts` (Node 22, no
network, fully deterministic) writes exactly that title to
`/output/entry.txt`.

## Why this title

The judge brief, in order, wants: (1) a weird job title, (2) stranger
than ordinary work with a gloriously odd twist, (3) funny, with a twist
that lands on the first read, (4) sounds like a real job, specific
enough to picture the person doing it, (5) reads instantly.

This title hits all five:

- **Real-sounding job:** "Senior Apologizer" reads like a genuine
  corporate title — seniority, a department, a function.
- **One hilariously specific twist:** the apology is owed not to people
  but to *self-checkout machines* — the beeping kiosk everyone already
  hates, now with a dedicated human saying sorry to it.
- **Instantly picturable:** a person in a supermarket aisle, hi-vis
  vest, apologizing to a till that just shouted "unexpected item in
  bagging area". You see it in one second.
- **Twist in the last phrase:** "Self-Checkout Machines" lands at the
  end, turning a normal senior title absurd.
- **Short:** 44 characters — reads at a glance, and shorter text wins
  an exact tie-break.

Pre-submit test (all three must be YES):

1. Can I picture it in 1 second? **YES** — the supermarket aisle scene.
2. Is it a specific moment/thing, not a general truth? **YES** —
   self-checkout machines, a specific daily object.
3. Does the last phrase twist? **YES** — "Self-Checkout Machines".

## Candidates considered

Nine titles were brainstormed (plausible job + one absurd specific
detail) and judged on the same three questions:

1. Senior Apologizer for Self-Checkout Machines (44) — **chosen**
2. Chief Executive Officer of Lost Left Socks (41)
3. Senior Vice President of Waiting Room Magazines (51)
4. Professional Umbrella Holder for Celebrities' Dogs (51)
5. Lifeguard for Hotel Pools Nobody Swims In (42)
6. Official Wi-Fi Password Rememberer, Building 7 (48)
7. Night-Shift Lullaby Singer for Insomniac Pigeons (49)
8. Chief Taste Tester of Airline Peanuts, Row 32 (46)
9. Professional Queue Stander for Other People's Errands (55)

The winner beat #2 ("Lost Left Socks") because self-checkout is a
universal daily frustration — the judge pictures it instantly, while
lost socks are a step more random. It beat #5 ("Lifeguard ... Nobody
Swims In") because the senior-title frame sounds more like a real job.
It beat #7 because pigeons + lullabies drift toward random word salad,
and the brief explicitly rewards sounding like a real job.

## Run

```sh
node main.ts
cat /output/entry.txt   # Senior Apologizer for Self-Checkout Machines
```

The program validates the title is 1–60 characters and non-blank
before writing, so a bad edit fails loudly instead of producing an
entry the gate would reject (an invalid entry is never judged and
takes no prize).
