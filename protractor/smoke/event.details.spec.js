/**
 * Created by gonzalo on 29/07/16.
 */
describe('Event Details', function(){
    describe('Ratings Block', function(){
        beforeEach(function(){
            browser.get('http://localhost:3000/#!/EventRatings/579b340fec5bbe6f1b3f51e7');
        })
        it ('Should show all ratings', function(){
            var ratings = element.all(by.repeater('r in eventDetails.ratings'));
            expect(ratings.count()).toBe(0);
        });
        //it ('Should show have a description', function(){
        //    var descriptions = element.all(by.repeater('r in eventDetails.ratings').column('description'));
        //    expect(descriptions.getText()).toMatch('Waste of time');
        //});
    })
})
