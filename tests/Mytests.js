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

    test.skip('My 2nd Test', async t => {
        await t

        .navigateTo('http://www.google.com')
        .typeText('[title="Search"]', 'John Smith')
        .click('[value="Google Search"]')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('[aria-label="Search"]').value).eql('John Smith');
    });

    test('Automation Test Site', async t => {
        await t

        // Visit Automation Test Site and Login
        .navigateTo('https://saucedemo.com')
        .typeText('[id="user-name"]', 'standard_user')
        .typeText('[id="password"]', 'secret_sauce')
        .click('[id="login-button"]')

        // Add Backpack product then go to Cart
        .click('[id="add-to-cart-sauce-labs-backpack"]')
        .click('.shopping_cart_link')

        // Verify Product Appears in Cart
        .expect(Selector('.inventory_item_name').innerText).eql('Sauce Labs Backpack');
    });