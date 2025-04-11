



import { expect, jest, test, beforeEach } from '@jest/globals';
import { home, about, notFound, serverError} from "../routes/handlers.js"

let req, res;

beforeEach(() => {
  req = {}; // reset request
  res = {
    render: jest.fn(),
    status: jest.fn().mockReturnThis(), 
  };
});

test('home page renders', () => {
    home(req, res);
    expect(res.render).toHaveBeenCalledWith("home")
});


test('about page render with fortune', () => {
    about(req, res);
    expect(res.render).toHaveBeenCalledTimes(1);
    expect(res.render).toHaveBeenCalledWith("about", expect.objectContaining({
        fortune: expect.stringMatching(/\W/)
    }))
})

test("404 handler renders", () => {
    notFound(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.render).toHaveBeenCalledWith("404");

});

test("500 handler renders", () => {
    serverError(new Error("Internal Server Error"), req, res, jest.fn());
    expect(res.render).toHaveBeenCalledTimes(1);
    expect(res.render).toHaveBeenCalledWith("500")
})