[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# Email-Boilerplate

## Initial Setup

`npm run setup`

Installs node modules, builds an email, then runs `npm run dev` - **First load might require a page refresh**

## How to use

`npm run dev` - Start the framework

Create email templates in `./src/templates/*.html` include partials from `./src/partials`. After saving, partials are merged into `./src/email/*.html` then automaticly moved to `./dist/*.html` with css injected into markup.

## Requirements

1. node v14.16.0 **`nvm use 14.16.0`**
2. npm ^6.13.4

## Commands

1. `npm run dev` - Browser sync + watch
2. `npm run images` - Image Minification
3. `npm run build` - Add build files to zip
4. `npm run partials` - Compiles partials into templates
5. `npm run build` - Add build files to zip

## Templates

1. html templates `/src/templates/*.html`

## Partials

1. html templates `/src/partials/*.html`

Include partials `@@include('../partials/header.html')`.

## CSS

1. Reset `/src/scss/reset.scss` - Embeded in head
2. Inline `/src/scss/inline.scss` - Injected into markup
3. Mobile `/src/scss/mobile.scss` - Embeded in head below reset

## Image minification

1. Image folder `/src/images/`
2. Run `npm run images`
3. Images Minified and moved to `/dist/images/`

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
2. Copy html template name from the list
3. Paste and hit `Enter`
4. Zip file created by name and date, then moved to ./dist/zips
5. Upload this zip to `mailchimp`
6. Test in mailchimp, realise every email client does it's own thing and nothing works.
7. Throw laptop into the sea!

## Note!

If you get an error on first load, save the template the refresh the page, will fix that issue. Sometimes CSS isn't injected during build, fix this by re running the build process.

## Usefull links

`https://github.com/Email-builder/gulp-email-builder`
`www.litmus.com`
