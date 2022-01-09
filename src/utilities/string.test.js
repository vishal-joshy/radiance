import {separateSlash} from './string';

it("should separate slash from string",()=>{
    const routeString = "/routepath";
    expect(separateSlash(routeString)).toBe("routepath")
})