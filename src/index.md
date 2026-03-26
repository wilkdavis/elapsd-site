---
layout: layout.njk
title: Elapsd
description: A calm, simple time tracker for real life.
---

# Elapsd

<p class="lead">
A simple time-since tracker to answer “How long has it been since I.... ?”
</p>

<div class="hr"></div>

## Features

- Quick Add, Add, and Skip logging flows
- Optional minimum or maximum intervals per event
- Calm caution/overdue visual status
- Event organization with categories
- Search/filter/sort support in event management
- Reports with per-event time-range analysis
- CSV export of log history
- Local-first storage with iCloud sync via CloudKit
- Offline support with sync status visibility

<div class="hr"></div>

## Screenshots - macOS

<div class="screens">
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/macos_dashboard_dark.png" data-lightbox-alt="Elapsd macOS dashboard" aria-label="Open screenshot: Elapsd macOS dashboard">
    <img src="/assets/img/macos_dashboard_dark.png" alt="Elapsd macOS dashboard" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/macos_manageevents_dark.png" data-lightbox-alt="Elapsd macOS manage events" aria-label="Open screenshot: Elapsd macOS manage events">
    <img src="/assets/img/macos_manageevents_dark.png" alt="Elapsd macOS manage events" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/macos_newevent_dark.png" data-lightbox-alt="Elapsd macOS new event" aria-label="Open screenshot: Elapsd macOS new event">
    <img src="/assets/img/macos_newevent_dark.png" alt="Elapsd macOS new event" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/macos_report_dark.png" data-lightbox-alt="Elapsd macOS report" aria-label="Open screenshot: Elapsd macOS report">
    <img src="/assets/img/macos_report_dark.png" alt="Elapsd macOS report" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/macos_settings_dark.png" data-lightbox-alt="Elapsd macOS settings" aria-label="Open screenshot: Elapsd macOS settings">
    <img src="/assets/img/macos_settings_dark.png" alt="Elapsd macOS settings" />
  </button>
</div>

## Screenshots - iOS

<div class="screens">
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/ios_dashboard.png" data-lightbox-alt="Elapsd iOS dashboard" aria-label="Open screenshot: Elapsd iOS dashboard">
    <img src="/assets/img/ios_dashboard.png" alt="Elapsd iOS dashboard" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/ios_edit_event.png" data-lightbox-alt="Elapsd iOS edit event" aria-label="Open screenshot: Elapsd iOS edit event">
    <img src="/assets/img/ios_edit_event.png" alt="Elapsd iOS edit event" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/ios_manage_events.png" data-lightbox-alt="Elapsd iOS manage events" aria-label="Open screenshot: Elapsd iOS manage events">
    <img src="/assets/img/ios_manage_events.png" alt="Elapsd iOS manage events" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/ios_report.png" data-lightbox-alt="Elapsd iOS report" aria-label="Open screenshot: Elapsd iOS report">
    <img src="/assets/img/ios_report.png" alt="Elapsd iOS report" />
  </button>
  <button class="lightbox-trigger" type="button" data-lightbox-src="/assets/img/ios_settings.png" data-lightbox-alt="Elapsd iOS settings" aria-label="Open screenshot: Elapsd iOS settings">
    <img src="/assets/img/ios_settings.png" alt="Elapsd iOS settings" />
  </button>
</div>

<div class="hr"></div>

## Use Cases

You're welcome to use it however you want :-) But, I get it... an example or two might make more sense.

### Interval Type: Minimum

This was my original use case and why I wrote this. I take Tylenol fairly often, for _reasons that's don't matter here_. There are dosage recommendations with 4hr time limits between them. So, when I reach for the Tylenol, it's nice to know how long ago I last took them. My method for tracking that has been:

1. switch over to my notepad in vscode
2. search for "tylenol"
3. look at the last entry
4. do the math in my head to know how long it's been
5. "cmd-shift-i" (to insert a new datetime stamp)

It works, but it's not great. Now, I:

1. switch to Elapsd
2. type 'ty' in the search
3. click _Quick Add_

If it's been less than 4 hours since the last time I logged it, I get a warning asking if I'm sure, and can continue (against their recommendations) or try to wait. No thinking, no doing the math in my head.

That uses the Interval type _Minimum_, with _4_ for the Interval and _Hours_ for the Duration.

**Use for anything you want to log that shouldn't be done more often than the interval you configure.**

<div class="hr"></div>

### Interval Type: Maximum

I use this for things that _should_ be done every so often, but aren't important enough to go in my calendar. For example, you should change your toothbrush at least every 3 months. (sooner if you've been sick, the bristles are frayed, etc)

- Event: Change toothbrush
- Interval Type: Maximum
- Interval: 12
- Duration: weeks

The last logged text changes throughout the interval:

- 6 weeks ago
- 11 weeks ago (approaching limit) _yellow text_
- 12 weeks ago (overdue) _red text_

So it's easy to see at a glance if something is upcoming or overdue.
(this is on desktop - iOS has slightly different visual cues)

<p>If you have notifications enabled (in Settings), you'll get a notification when it's overdue.</p>

**Replace the filter in your HVAC. Change the filter in your humidifier. Water your plants. Call your mom.**

<div class="hr"></div>

### Interval Type: None

This for things you might want to log occasionally but there's no regular minimum or maximum interval. I don't really know what I'll use this for... for purely one-off events I'd probably put them somewhere else (a markdown journal entry in my Notes repo, most likely). I added it thinking I might want it, so someday I'll probably figure out a use for it.

<div class="hr"></div>

## FAQ

<details>
<summary> Is it free? </summary>
<p>Yep. It's just something I knocked out for myself to use, not something worth charging for.</p>
</details>

<details>
<summary> Does it collect my data? </summary>
<p>The short version: not if I can help it. I don't want your data, I hate ads in apps, and I don't care about analytics. See the full <a href="/privacy/">Privacy Policy</a> for specifics.</p>
</details>

<details>
<summary> Can I request features? </summary>
    <p> Sure. It's a side project so no promises, but I do read messages.</p>
</details>
