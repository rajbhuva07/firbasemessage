// src/cookies.js

import { serialize, parse } from 'cookie';
import { IncomingMessage, ServerResponse } from 'http';

class Cookies {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.cookies = parse(req.headers.cookie || '');
  }

  get(name) {
    return this.cookies[name];
  }

  set(name, value, options = {}) {
    const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
    const cookie = serialize(name, stringValue, options);
    this.res.setHeader('Set-Cookie', cookie);
  }

  remove(name) {
    this.set(name, '', { maxAge: -1 });
  }
}

export default Cookies;
