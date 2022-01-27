import { Selector } from 'testcafe';

fixture`My Test Plan`
    .page`http://devexpress.github.io/testcafe/example`;


    test.skip('My first test', async t => {
        await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });

    test('My 2nd Test', async t => {
        await t

        .navigateTo('http://www.google.com')
        .typeText('[title="Search"]', 'John Smith')
        .click('[value="Google Search"]')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('[aria-label="Search"]').value).eql('John Smith');
    });