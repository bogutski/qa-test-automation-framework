import { assert } from 'chai';
import exp from '../expected/homepage.exp';
import sel from '../selectors/homepage.sel';

describe('Client', function () { //define suite title by passing a string

  it('Page title', function () { //define test title by passing a string
    browser.url('/'); //open baseUrl + string passed in .url() function
    let title = browser.getTitle(); //get page title and assign it to the "title" variable
    assert.equal(title, exp.pageTitle); //compare {title} (actual) and "Bug Tracker" (expected)
  })

  it('Title and version', function () {
    let title = $(sel.siteName).getText();
    assert.equal(title, exp.titleVersion);
  })

});