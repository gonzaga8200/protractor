/**
 * Created by gonzalo on 27/07/16.
 */
describe('Event List Details: ', function(){
    describe('When clicking on an event', function(){
        it('Should navigate to the details page', function(){
            var name;

            var myClass;

            beforeEach(function(){
                browser.get('http://localhost:3000/#!/EventRatings');

                var firstElement = element.all(by.binding('name')).first();

                firstElement.getText().then(function(text){
                    name = text;
                });

                firstElement.click();

                browser.waitForAngular();

            });
        });
        it ('Should navigate to the details page', function(){
            var header = element(by.binding('name'));


            expect(header.getText()).toMatch('Prueba');
        });

        it ('Should update the url', function(){
            expect(browser.getCurrentUrl()).toMatch('EventRatings/')
        });
    });
});
