/**
 * Created by gonzalo on 29/07/16.
 */

var CreatePage = require('./pages/create.event.page.js'),
    ListPage = require('./pages/event.list.page.js');
describe('Adding a new event', function(){
    var button, css,
        createPage = new CreatePage(),
        listPage = new ListPage();
    beforeEach(function(){
        browser.get('http://localhost:3000/#!/EventRatings/new');
    })
    describe('When the form is empty', function(){
        it('should disable the create button', function(){
            var css = createPage.getbuttonClasses();
            expect(css).toMatch('disabled');
        })

    });

    describe('When specifying the name', function(){
        it('Should enable the Create Button', function(){
           createPage.setName('A Sample Event');

            var css = createPage.getbuttonClasses();
            expect(css).not.toMatch('disabled');

        })
    });

    describe('When the name is too short', function(){
        it ('Should disabled Button', function(){
            createPage.setName('ABC');
            var css = createPage.getbuttonClasses();
            expect(css).toMatch('disabled');
        })
    })

    describe('When saving the form', function(){
        it ('should add the event to the list', function(){
            createPage.name.sendKeys('Module 3');

            createPage.saveData();

            browser.waitForAngular();

            expect(listPage.getNameTexts()).toMatch('Module 3');
        })
    })
})
