import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Keyboard
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 *
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.hide();
 *
 * ```
 */
export declare class Keyboard extends IonicNativePlugin {
    /**
     * Check keyboard status visible or not.
     * @returns {boolean}
     */
    isVisible: boolean;
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    hideFormAccessoryBar(hide: boolean): void;
    /**
     * Hide the keyboard if shown.
     */
    hide(): void;
    /**
     * Force keyboard to be shown.
     */
    show(): void;
    /**
     * Programmatically set the resize mode
     * @param mode {string}
     */
    setResizeMode(mode: 'native' | 'body' | 'ionic'): void;
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardWillShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardHide(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardWillHide(): Observable<any>;
}
