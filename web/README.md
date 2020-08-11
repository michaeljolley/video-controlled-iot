# IoT Control Via WebRTC

This sample application can be used to create an OpenTok video session with a single participant. The
participants face is tracked.

## Welcome to the Vonage Video API

If you're new to the Vonage Video API, you can [sign up for a free account](https://tokbox.com/account/user/signup?utm_source=DEV_REL) and get some free credit to get you started.

## Prerequisites

- A [Vonage Video API Account]
- A [Particle Account]
- An Azure Account with [Face API Cognitive Service](https://azure.microsoft.com/en-us/services/cognitive-services/face/)
- Optional: [Ngrok](https://ngrok.com/) for test deployment

## Configuring the application

1. Clone this repository.

2. Edit the /js/config.js file and set values each of the variables.

| Variable           | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| OPENTOK_API_KEY    | Project specific API Key found in your [TokBox Account]         |
| OPENTOK_SESSION_ID | Session ID generated in your [TokBox Account] (Read more below) |
| OPENTOK_TOKEN      | Token generated in your [TokBox Account] (Read more below)      |

### OpenTok Session ID & Token

To generate an OpenTok Session ID & Token, log into your [TokBox Account], and either create
a new project or use an existing project. Then go to your project page and scroll down to the
**Project Tools** section. From there, you can generate a session ID and token manually. Use the
project’s API key along with the session ID and token you generated.

**Important notes:**

- You can continue to get the session ID and token values from your Account during testing and
  development, but before you go into production you must set up a server. To learn more,
  visit [OpenTok Basics](https://tokbox.com/developer/guides/basics/) in the Developer Documentation.

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

- Open an issue on this repository
- Tweet at us! We're [@VonageDev on Twitter](https://twitter.com/VonageDev)
- Or [join the Vonage Community Slack](https://developer.nexmo.com/community/slack)

## Further Reading

- Check out the Developer Documentation at <https://tokbox.com/developer/>

<!-- add links to the api reference, other documentation, related blog posts, whatever someone who has read this far might find interesting :) -->

[vonage video api account]: https://tokbox.com/account
[particle account]: https://particle.io
