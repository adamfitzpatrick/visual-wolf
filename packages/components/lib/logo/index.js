"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const decorators_js_1 = require("lit/decorators.js");
const lit_1 = require("lit");
let Logo = class Logo extends lit_1.LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    render() {
        return (0, lit_1.html) `
      <svg class='logo' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20.8">
        <g id='logo' transform='translate(0,0)'>
          <path id='vert-hex' d='M 0.3 5.3
          l 8.66 -5
          l 8.66 5
          v 10
          l -8.66 5
          l -8.66 -5
          v -10 z' fill='none' stroke='#ffffff' strokeWidth='0.5' />
          <text x='2' y='22.5' transform='scale(0.6)' fill='#ffffff'>GW</text>
        </g>
      </svg>
    `;
    }
};
exports.Logo = Logo;
Logo.styles = (0, lit_1.css) `
    .logo {
      width: 4rem;
      margin: 0 2rem;
    }
  `;
__decorate([
    (0, decorators_js_1.property)()
], Logo.prototype, "size", void 0);
exports.Logo = Logo = __decorate([
    (0, decorators_js_1.customElement)('vwolf-logo')
], Logo);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxREFBNEQ7QUFDNUQsNkJBQTRDO0FBR3JDLElBQU0sSUFBSSxHQUFWLE1BQU0sSUFBSyxTQUFRLGdCQUFVO0lBV2xDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVTLE1BQU07UUFDZCxPQUFPLElBQUEsVUFBSSxFQUFBOzs7Ozs7Ozs7Ozs7O0tBYVYsQ0FBQTtJQUNILENBQUM7O0FBL0JVLG9CQUFJO0FBQ1IsV0FBTSxHQUFHLElBQUEsU0FBRyxFQUFBOzs7OztHQUtsQixBQUxZLENBS1g7QUFHRjtJQURDLElBQUEsd0JBQVEsR0FBRTtrQ0FDYTtlQVRiLElBQUk7SUFEaEIsSUFBQSw2QkFBYSxFQUFDLFlBQVksQ0FBQztHQUNmLElBQUksQ0FnQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuXG5AY3VzdG9tRWxlbWVudCgndndvbGYtbG9nbycpXG5leHBvcnQgY2xhc3MgTG9nbyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgbWFyZ2luOiAwIDJyZW07XG4gICAgfVxuICBgO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3ZnIGNsYXNzPSdsb2dvJyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTggMjAuOFwiPlxuICAgICAgICA8ZyBpZD0nbG9nbycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCwwKSc+XG4gICAgICAgICAgPHBhdGggaWQ9J3ZlcnQtaGV4JyBkPSdNIDAuMyA1LjNcbiAgICAgICAgICBsIDguNjYgLTVcbiAgICAgICAgICBsIDguNjYgNVxuICAgICAgICAgIHYgMTBcbiAgICAgICAgICBsIC04LjY2IDVcbiAgICAgICAgICBsIC04LjY2IC01XG4gICAgICAgICAgdiAtMTAgeicgZmlsbD0nbm9uZScgc3Ryb2tlPScjZmZmZmZmJyBzdHJva2VXaWR0aD0nMC41JyAvPlxuICAgICAgICAgIDx0ZXh0IHg9JzInIHk9JzIyLjUnIHRyYW5zZm9ybT0nc2NhbGUoMC42KScgZmlsbD0nI2ZmZmZmZic+R1c8L3RleHQ+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIGBcbiAgfVxufVxuIl19