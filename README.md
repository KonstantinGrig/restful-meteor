#### RESTfull APIs for meteor

## Install Package - restfull
`meteor add konstantingrig:restfull`

## Example

##### Enable RESTfull for Collection Posts
```js
RestFulCollection.addCollection(Posts);
```

##### Get all Posts, request type GET
`http://yoursite/restapi/posts`

##### Get one Post, request type GET
`http://yoursite/restapi/posts/2Qpf6zSa5fzq4a3co`

##### Delete Post, request type DELETE
`http://yoursite/restapi/posts/2Qpf6zSa5fzq4a3co`

##### Search and sort Posts, request type GET
`http://yoursite/restapi/posts/search?sort={"url":1,"title":1}&find={"title":"/Meteor/"}`
