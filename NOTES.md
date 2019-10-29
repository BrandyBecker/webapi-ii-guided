# Routing Notes

[ client ] ==> the client makes a request to the API ==> [ api ] ==> the API sends a response back to the ==> [ client ]

--------------------------------------------------------------------------------------------------------------------------------

Q: What is the Interface for a Web API? 
A: 
- URI ( Uniform Resource Identifier ),
- URL ( Universal Resource Locator ),
- Endpoint [ very related to a URI ],
- HTTP === Network Protocol, a set rules for communication
--------------------------------------------------------------------------------------------------------------------------------
REST(ish) APIs:
- everything is a `Resource`
- single URI per resource. ex: `http://web23.com/channels`, `http://web23.com/users`
- use HTTP METHODS to express the actions the client can perform
- hypermedia (at this level we are fully REST)

<sub>HTTP Methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods</sub>

--------------------------------------------------------------------------------------------------------------------------------
|Non REST|REST|
|:--|:--|
|/listAllChannels|GET: /channels|
|/createChannel|POST: /channels|
|/updateChannel|PUT: /channels|
|/deleteChannel|DELETE: /channels|
|/findChannel?id=123|GET: /channels/123|
--------------------------------------------------------------------------------------------------------------------------------
https://www.restapitutorial.com/lessons/httpmethods.html
## == Should be `idempotent*` ==
 - GET : READ [used to **read** (or retrieve) a representation of a resource]
 - PUT : UPDATE/REPLACE [**update** capabilities]
 - DELETE : Delete [to **delete** a resource identified by a URI]

## == Isn't `idempotent*` ==
 - POST : CREATE [to **create** new resources]
--------------------------------------------------------------------------------------------------------------------------------
<sub>* idempotent: same command executed multiple times, the state of resource on the server is exactly
the same, much like pure functions.</sub>

--------------------------------------------------------------------------------------------------------------------------------

## Query String
Example: https://www.google.com/search?q=express&rlz=1C1CHBF_enUS869US869&oq=express&aqs=chrome..69i57j0l2j69i60j69i61j69i60.2259j0j7&sourceid=chrome&ie=UTF-8

- https://www.google.com/search
- ?
- q=express
- &
- rlz=1C1CHBF_enUS869US869
- &
- oq=express
- &
- aqs=chrome..69i57j0l2j69i60j69i61j69i60.2259j0j7
- &
- sourceid=chrome
- &
- ie=UTF-8

```js
req.query = {
    q:'express',
    rlz: '1C1CHBF_enUS869US869',
    oq: 'express',
    aqs: 'chrome..69i57j0l2j69i60j69i61j69i60.2259j0j7',
    sourceid: 'chrome',
    ie: 'UTF-8'
}
```
--------------------------------------------------------------------------------------------------------------------------------
- Richardson Maturity Model: https://www.martinfowler.com/articles/richardsonMaturityModel.html

- What is REST — A Simple Explanation for Beginners, Part 1: Introduction : https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f

- Express Routing : https://expressjs.com/en/guide/routing.html

- HTTP primer for frontend developers : https://www.webdevdrops.com/en/http-primer-for-frontend-developers-f091a2070637/