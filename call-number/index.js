var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Call Number
 * @description
 * Call a number directly from your Cordova/Ionic application.
 * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
 *
 * @usage
 * ```typescript
 * import { CallNumber } from '@ionic-native/call-number';
 *
 * constructor(private callNumber: CallNumber) { }
 *
 * ...
 *
 *
 * this.callNumber.callNumber("18001010101", true)
 *   .then(res => console.log('Launched dialer!', res))
 *   .catch(err => console.log('Error launching dialer', err));
 *
 * ```
 */
var CallNumber = (function (_super) {
    __extends(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Calls a phone number
     * @param {string} numberToCall The phone number to call as a string
     * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    /**
       * Calls a phone number
       * @param {string} numberToCall The phone number to call as a string
       * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
       * @return {Promise<any>}
       */
    CallNumber.prototype.callNumber = /**
       * Calls a phone number
       * @param {string} numberToCall The phone number to call as a string
       * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
       * @return {Promise<any>}
       */
    function (numberToCall, bypassAppChooser) {
        return;
    };
    /**
     * Check if call feature is available
     * @return {Promise<any>}
     */
    /**
       * Check if call feature is available
       * @return {Promise<any>}
       */
    CallNumber.prototype.isCallSupported = /**
       * Check if call feature is available
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    CallNumber.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", Promise)
    ], CallNumber.prototype, "callNumber", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallNumber.prototype, "isCallSupported", null);
    /**
     * @name Call Number
     * @description
     * Call a number directly from your Cordova/Ionic application.
     * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
     *
     * @usage
     * ```typescript
     * import { CallNumber } from '@ionic-native/call-number';
     *
     * constructor(private callNumber: CallNumber) { }
     *
     * ...
     *
     *
     * this.callNumber.callNumber("18001010101", true)
     *   .then(res => console.log('Launched dialer!', res))
     *   .catch(err => console.log('Error launching dialer', err));
     *
     * ```
     */
    CallNumber = __decorate([
        Plugin({
            pluginName: 'CallNumber',
            plugin: 'call-number',
            pluginRef: 'plugins.CallNumber',
            repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
            platforms: ['Android', 'iOS']
        })
    ], CallNumber);
    return CallNumber;
}(IonicNativePlugin));
export { CallNumber };
//# sourceMappingURL=index.js.map