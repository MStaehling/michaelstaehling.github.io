How do I make API requests?
 
 *  What is the base URL?
   ```
   https://openapi.etsy.com/v2
   ```
 
 * Are there any headers or query parameters required?
  It's passed using the standard api_key parameter.
 
 * What kind of response should I expect?
  200:ok      JSON

How does the API handle authentication?
 With an application key that you get during app registration
 
 * Do I need to authenticate?
 yes

 * What can I do with an unauthenticated request?---------------------

 * How can I authenticate my request?-----------------------

How do I ask the API for...

URL paths contain the unique IDs of resources. These are identified by a leading colon, as with :listing_id above. Before making a call, you must substitute a valid ID value for these placeholders. ID parameters must appear in the URL and cannot be substituted for GET parameters. All ID parameters listed in the URL pattern must be present.

 * A list of products belonging to a specific category or collection?
 ```
 https://openapi.etsy.com/v2/listings/:listing_id
 ```

 * Details about a specific product? What details are provided?
 https://www.etsy.com/developers/documentation/getting_started/resources

 * The main and additional images for a product?
  Image uploads can be performed using a POST request with the Content-Type: multipart/form-dataheader, following RFC1867. This is identical to using curl -F, except that that request needs to be signed using OAuth.
Otherwise you need to download them to do as you wish if the initial size isn't right.

Is there a limit to the number of requests I can make?
10k 24hr or 10/sec with authentication

 * Is there a way of extending that limit?
  contact developer@etsy.com with a reason for the need to extend the limit

 * What happens when I hit the limit?
  Wait up to 2hrs

What if there is a _lot_ of data returned?

 * How can I ask for more (or less) data from a request?-------------

 * How do I know that there is more data available?------------
