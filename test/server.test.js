'use strict'

const supertest = require('supertest')
const assert = require("chai").assert

let server = supertest.agent('http://localhost:4000')

describe("server test", _ => {
  it('should return a valid json doc', done => {
    server
      .get("/")
      .expect(200)
      .end((err, res) => {
        // console.log(JSON.stringify(res.body, null, 2))
        assert.isObject(res.body)      
        done()
      })
  })
})