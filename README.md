[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# Email-Boilerplate

## Requirements
1. NODE

## Commands
1. `npm run start` - Browser sync + watch
2. `npm run images` - Image Minification
3. `npm run test` - Test email on Litmus and Email
4. `npm run build` - Build Email and generate zip

## Template Files
1. html template `/dev/template/index.html`

## CSS
1. Reset `/dev/scss/reset.scss` - Embeded in head
2. Inline `/dev/scss/inline.scss` - Injected into markup
3. Mobile `/dev/scss/mobile.scss` - Embeded in head below reset

## Image minification
1. Image folder `/build/images/`
2. Run `npm run images`
3. Images Minified

## Testing Litmus & Email Accounts
1. Gulp.js line 76,77 add Email test address and subject
2. Make sure you have the correct litmus email address to recieve the email
2. Run `npm run test`
3. Goto Litmus see your tests

## Usefull links
`https://github.com/Email-builder/gulp-email-builder`
`www.litmus.com`
