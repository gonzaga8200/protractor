/**
 * Created by gonzalo on 29/07/16.
 */
describe('Creating New Event ', function(){
    describe('When clicking', function(){
        it('Should route to the new event page', function(){
            browser.get('http://localhost:3000/#!/EventRatings');
            element(by.buttonText('New Event')).click();
            expect(browser.getCurrentUrl()).toMatch('EventRatings/new');
        });
    })
})
