# Customer.io Node Client

Clean and simple NodeJS wrapper for the Customer.io [REST API](http://customer.io/docs/api/rest.html). 
Designed specifically to be as similar as possible to the main Customer.io JavaScript client.

## Example

```js
var customer = require('customerio');

// Configure the module to your account
customer.init('your_site_id', 'your_api_key');

// Identify a user 
customer.identify({
  id: '123',
  email: 'billy@jean.com',
  created_at: 1416774422
});

// Delete a user
customer.delete('123');

// Track an event for a user
customer.track('123', 'bought ping pong paddle', {
  color: 'red'
})

***

## Methods

### init(siteId, apiKey)

Set up the the module to work with your account by inputting your `siteId` and `apiKey`.

```js
customer.init('your_site_id', 'your_api_key');
```

### identify(properties)

Create/update a user in Customer.io, passing any properties. Note: JavaScript dates are automatically converted 
to UNIX to comply with Customer.io's standard of timestamp policy.

Returns a [When-style](https://github.com/cujojs/when) promise.

```js
customer.identify({
  id: "123",
  email: "chris@test.com",
  created_at: 1416774422,
  steven: "smith"
}).done(function (result) {
  console.log("done");
}, function (err) {
  console.log("oh noes!", err);
});
```

### remove(customerId)

### track(customerId, eventName, properties)

Track an event for a given customer. `properties` are optional. Note: JavaScript dates are automatically converted 
to UNIX to comply with Customer.io's standard of timestamp policy.

```js
customer.track("123", "installed an epic app").done(function () {
  console.log("done");
}, function (err) {
  console.log(err);
});
```

***

## Licence

Released under the MIT license. See file called [LICENCE](LICENCE) for more details.