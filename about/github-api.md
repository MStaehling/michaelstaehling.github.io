 * ### How does the API handle authentication?
 
 https://developer.github.com/v3/

 
 * ### Do I need to authenticate?
 
 Authenticate is used to prevent leakage of private repositories to unauthorized users.
 
 * ### What can I do with an unauthenticated request?
 
 Requests that require authentication can return 404 Not Found, instead of 403 Forbidden, in some places.
 
 * ### How can I authenticate my request? (3 ways)
 
* Basic Autentication
```
curl -u "username" https://api.github.com
```
* OAuth2 Token (sent in a header)
```
curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
* OAuth2 Token (sent as a parameter)
```
curl https://api.github.com/?access_token=OAUTH-TOKEN
```
 
 * ### How do I ask the API for...
    * The profile information for a specific user?
    
    This fetches the profile info for octocat

    ```
    curl -i https://api.github.com/users/octocat
    ```
    
    * The repository listing for a specific user?
    
    This will fetch the repos of octokit
    
    ```
    GET /orgs/octokit/repos
    ```
    * The recent, public activity for a specific user?
    
    This fetches a specific repo....the octokit/octokit.rb repo
    
    ```
    GET /repos/octokit/octokit.rb
    ```
    
    * Is there a limit to the number of requests I can make?
      * 5k requests/hr for basic authentication or OAuth
      * 60 requests/hr for unauthenticated requests (associated with your IP address)
 


* Is there a way of extending that limit?

You can pass your app's client ID and secret as part of the query string to increase rate limit (only to be used for server to server calls) 
``` 
HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4966
X-RateLimit-Reset: 1372700873
```

* What happens when I hit the limit?
 
You get a 
```
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
```

* What if there is a lot of data returned?
 
fix the issue by caching API responses and using conditional requests

* How can I ask for more (or less) data from a request?
 
Contact Github costumer support??


* How do I know that there is more data available?



### What are the endpoints for fetching...

  * the profile data for a user? 
  ```
  https://api.github.com/users/username
  ```
  
  * the organizations a user belongs to?
 ```
  https://api.github.com/users/username/org
  ```
  
  * the repositories a user has created?
  ```
  https://api.github.com/users/username/repos
  ```
  
  * a filtered list of repositories?????????
  ```
  https://api.github.com/users/username
  ```
  
  * a sorted list of repositories?????????
  ```
  https://api.github.com/users/username
  ```
  
  * public events for a user?
  ```
  https://api.github.com/users/username/events/public
  ```
  
### When fetching public events for a user...
 
  * How many results are returned by default?
  
Will be paginated 30 times

  * What limitations exist on fetching more results?
  
  * What is the basic structure of the results?
  
  * What fields are included in each result?
  
  * What are the data types for each field?
  
  * What are some of the different values for the type field?

### How can I use the Github API to...

 * get all the comments for a particular issue?
 ```
GET /repos/:owner/:repo/issues/:number/comments
```
for a single comment
```
GET /repos/:owner/:repo/issues/comments/:id
```

 * add a comment to an issue?

```
POST /repos/:owner/:repo/issues/:number/comments
```

### How can I use the jQuery API to...

* get the HTML contents of an element?

.text, .innerText, .innerHtml

* create a new HTML element?

.html() = ....

* add an HTML element to the page?

.append()  http://api.jquery.com/append/

### How can I use the Lodash API to...

* replace placeholders with values from an object?

Use  ._pluck I think?????

* repeat code for every item of an array?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

every() method will go through the the array until it comes across a falsy.
