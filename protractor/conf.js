/**
 * Created by gonzalo on 28/07/16.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', // selenium address
    specs: ['./**/*.spec.js'],

    suites: {
      smoke: './smoke/*.spec.js',
      longRunning:'./ratings/a.bunch.of.long.test.spec.js',
      full: './**/*.spec.js',
      create: './ratings/create.event.spec.js',
      list: './smoke/event.list.item.spec.js'
    },

    //specs: ['./ratings/event.list.item.spec.js'],

    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280, 720);
    }
}