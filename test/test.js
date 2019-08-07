import { assert } from 'chai';

describe('Client', function () { //define suite title by passing a string

    it('Get title', function () { //define test title by passing a string
      browser.url('/'); //open baseUrl + string passed in .url() function
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
      assert.equal(title, 'Progress Monitor'); //compare {title} (actual) and "Bug Tracker" (expected)
    })

    it('Get title', function () { //define test title by passing a string
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        assert.equal(title, 'Progress Monitor'); //compare {title} (actual) and "Bug Tracker" (expected)
      })

});