---
layout: layout.njk
title: Contact
description: Contact Elapsd support.
---

# Contact

If you found a bug, have a question, or want to suggest a feature, send a message here.

<div class="panel">
  <p class="muted">
    <strong>Support note:</strong> Elapsd is a free side project. Support is best-effort.
    If something is genuinely broken, I’ll probably want to fix it anyway (because I use it too).
  </p>
</div>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thanks/">

  <input type="hidden" name="form-name" value="contact" />

  <p class="hidden">
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  <label>
    Name
    <input name="name" autocomplete="name" required />
  </label>

  <label>
    Email
    <input name="email" type="email" autocomplete="email" required />
  </label>

  <label>
    Message
    <textarea name="message" rows="7" required></textarea>
  </label>

<button type="submit">Send</button>

  <p class="muted">
    Please don’t include sensitive personal information. 
  </p>
</form>
