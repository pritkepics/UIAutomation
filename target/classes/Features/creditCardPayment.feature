Feature: Buy pillows from demo.midtrans.com

Scenario Outline: Buy Pillow using credit card

Given user is in home page and title of the page is "<title>"
Then click on BUY NOW button
And click on CHECKOUT button
Then click on CONTINUE button
Then verify credit card option is visible
Then click on credit card 
And enter card number "<cardNumber>"
And enter date "<date>"
And enter CVV "<CVV>"
Then click PAY NOW button
Then verify payment page appears
Then enter password "<password>"
Then click OK button
Then verify message "<message>"
And close browser

Examples:
	|  title        | cardNumber          | date  | CVV | password |   message                           |
	|  Sample Store | 4811 1111 1111 1114 | 03/20 | 123	| 112233   |   Transaction successful            |
    |  Sample Store | 4911 1111 1111 1113 | 03/20 | 123	| 112233   |   Your card got declined by the bank|


	