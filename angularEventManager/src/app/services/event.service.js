"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EventService.prototype.getEvents = function () {
        alert("Hello from ts");
        return this.http.get('event')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.handleError = function (error) {
        alert("allert");
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    EventService = __decorate([
        core_1.Injectable()
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
