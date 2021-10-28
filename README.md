[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# Email-Boilerplate

## Requirements
1. node ^12.14.1
2. npm ^6.13.4

## Commands
1. `npm run start` - Browser sync + watch
2. `npm run images` - Image Minification
3. `npm run test` - Sends test email
4. `npm run build` - Add build files to zip

## Template Files
1. html template `/src/template/*.html`

## CSS
1. Reset `/src/scss/reset.scss` - Embeded in head
2. Inline `/src/scss/inline.scss` - Injected into markup
3. Mobile `/src/scss/mobile.scss` - Embeded in head below reset

## Image minification
1. Image folder `/src/images/`
2. Run `npm run images`
3. Images Minified and moved to `/dest/images/`

## Email Test
1. Update .env test variables `line 14 - 17`
```
TEST_FILE = './dist/index.html'
TEST_EMAIL_TO = 'tetloose@gmail.com'
TEST_EMAIL_FROM = 'tetloose@gmail.com'
TEST_SUBJECT = 'Gulp Email Test'
```
2. Run `npm run test`
3. Visit email client, look in `SPAM` folder

## Build
This builds a zip ready to be uploaded to mailchimp
1. Run `npm run build`
2. Copy html template name excluding the .html
3. Paste and hit `Enter`
4. Zip file created by name and date, then moved to ./dist/zips
5. Upload this zip to `mailchimp`

## Usefull links
`https://github.com/Email-builder/gulp-email-builder`
`www.litmus.com`
