import { assert } from 'chai';

class Helpers {

    elementsVisible(array) {
        array.map(el =>
            it(el, function () {
                let elem = $(el).isDisplayed();
                assert.isTrue(elem);
            })
        )
    }


}

export default new Helpers();