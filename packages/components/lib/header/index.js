"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
require("../logo");
let Header = class Header extends lit_1.LitElement {
    constructor() {
        super();
        this.activeNav = 'maps';
        this.attachShadow({ mode: 'open' });
    }
    render() {
        return (0, lit_1.html) `
      <div class='header'>
        <vwolf-logo />
        <h1>grid wolf</h1>
      </div>
    `;
    }
};
exports.Header = Header;
Header.styles = (0, lit_1.css) `
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      border-radius: 2rem;
      background-color: #000000;
      color: #ffffff;
      box-shadow: var(--shadow-light-down);
    }
  `;
__decorate([
    (0, decorators_js_1.property)()
], Header.prototype, "activeNav", void 0);
exports.Header = Header = __decorate([
    (0, decorators_js_1.customElement)('vwolf-header')
], Header);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2QkFBNEM7QUFDNUMscURBQTREO0FBQzVELG1CQUFpQjtBQUdWLElBQU0sTUFBTSxHQUFaLE1BQU0sTUFBTyxTQUFRLGdCQUFVO0lBaUJwQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsY0FBUyxHQUFHLE1BQU0sQ0FBQTtRQUloQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUEsVUFBSSxFQUFBOzs7OztLQUtWLENBQUE7SUFDSCxDQUFDOztBQTdCVSx3QkFBTTtBQUNWLGFBQU0sR0FBRyxJQUFBLFNBQUcsRUFBQTs7Ozs7Ozs7Ozs7R0FXbEIsQUFYWSxDQVdYO0FBR0Y7SUFEQyxJQUFBLHdCQUFRLEdBQUU7eUNBQ087aUJBZlAsTUFBTTtJQURsQixJQUFBLDZCQUFhLEVBQUMsY0FBYyxDQUFDO0dBQ2pCLE1BQU0sQ0E4QmxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0ICcuLi9sb2dvJztcblxuQGN1c3RvbUVsZW1lbnQoJ3Z3b2xmLWhlYWRlcicpXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgLmhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxpZ2h0LWRvd24pO1xuICAgIH1cbiAgYDtcblxuICBAcHJvcGVydHkoKVxuICBhY3RpdmVOYXYgPSAnbWFwcydcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz0naGVhZGVyJz5cbiAgICAgICAgPHZ3b2xmLWxvZ28gLz5cbiAgICAgICAgPGgxPmdyaWQgd29sZjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cbn1cblxuIl19