[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# WP-Boilerplate

## setup
1. Install Node if not installed
2. Run `npm install`
3. Run `gulp`


## Gulp commands
* **Inline styles into email:** `gulp inline`
* **Compile SCSS:** `gulp styles`
* **Image minification:** `gulp images`
* **Browser Sync:** `gulp browser-sync`
* **Testing Litmus & Email Accounts:** `gulp litmus`
* **Watch for changes:** `gulp watch`
* **Default GULP:** `gulp`


## Inline styles into email
1. The email template is stored in `/dev/template/index.html`
2. Write html there, save
3. Run `gulp inline`
4. Styles are injected into template and moved to production `/app/index.html`


## Compile scss
**Styles are split into 3 sections**

* Reset /dev/scss/reset.scss
* * These styles get embeded first into head
* Inline /dev/scss/inline.scss**
* * These styles get inlined into markup
* Mobile /dev/scss/mobile.scss**
* * These styles get embeded after reset, for max width media querys.


## Image minification
1. Drop images into `/app/images/`
2. Run `gulp images`
3. Images Minified


## Browser Sync
1. Run `gulp browser-sync`
2. Check terminal for Local External and Ui addresses


## Testing Litmus & Email Accounts
1. Gulp.js line 76,77 add Email test address and subject
2. Make sure you have the correct litmus email address to recieve the email
2. Run `gulp litmus`
3. Goto Litmus see your tests


## Watch for changes
1. Run `gulp watch`
2. Changes made to styles or html get injected and browser reloads


## Default GULP
1. Run `gulp`
2. Browser-sync, styles, inline, watch


## USEFULL LINKS
`http://ianlunn.github.io/Hover/`
`http://gudh.github.io/ihover/dist/`
`http://tympanus.net/Tutorials/OriginalHoverEffects/index10.html`
`https://github.com/h5bp/Effeckt.css`
`http://forthebadge.com/`
`https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow`
`https://github.com/Email-builder/gulp-email-builder`
`www.litmus.com`
