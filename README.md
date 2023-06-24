<a href="https://hire.arbizen.com">
  <img alt="Hire Me - An open source hire me widget for freelancers." src="/public/demo.png"/> 
  <h1 align="center">Hire Me</h1>
</a>

<p align="center">
  An open source `hire me` widget to get your clients right into your bucket. Made & specialized for freelancers!
</p>

<p align="center">
  <a href="https://hire.arbizen.com" target="_blank"><strong>Demo</strong></a> ·
  <a href="#introduction"><strong>Intro</strong></a> ·
  <a href="#tech-stack"><strong>Stack</strong></a> ·
  <a href="#contribute"><strong>Contribute</strong></a>
</p>
<br/>

## Introduction

Hire Me is an open-source widget to get your clients right into your bucket. Built with [NextJs](https://nextjs.org), and [Stripe](https://stripe.com). Clone the repo and easily make your own version.

Stripe is in test mode. Thus you can use the following card information to make a payment:

- Card Number: 4242424242424242
- Expiry date: Any future date
- CVC: Any 3 digits
- Want more? [Check out](https://stripe.com/docs/testing?testing-method=card-numbers#visa) the list of all test cards

## Tech Stack

- [Next.js 13 (with /app directory)](https://nextjs.org/) – framework
- [JavaScript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Vercel](https://vercel.com/) – hosting
- [Stripe](https://stripe.com) – payment
- [React Hook Form](https://react-hook-form.com) – form handling
- [Zod](https://zod.dev) – form validation

## Development

1. Clone the repo - `git clone https://github.com/arbizen/hire-me.git`
2. Enter into the new directory - `cd hire-me`
3. Create .env.local - `touch .env.local` (see .env.example)
4. Set STRIPE_SECRET_KEY & HOST (Change it to the production url in production) in `.env.local`
5. Run `npm install`
6. Run `npm run dev`
7. Happy coding 🎉

## Contribute

Want to contribute? Spot on:

- [Open an issue](https://github.com/arbizen/hire-me/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/arbizen/hire-me/pull) to add new features/make quality-of-life improvements/fix bugs.

## Author

- Arb ([@arbizzen](https://twitter.com/arbizzen))

## License

Hire Me is open-source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/arbizen/hire-me/blob/main/LICENSE).
