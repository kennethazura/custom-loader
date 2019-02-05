/**
 * Simple custom loader module for javascript
 *
 * @class Loader
 * @author Keneth Jayson Azura <kenneth01.simplexi.com.ph>
 * @dependencies JQuery
 * @since 02/02/2019
 */
class Loader {

    /**
     * Constructor
     * @param string sLoaderId DOM element identifier
     */
    constructor(sLoaderId) {
        this.loader = $(sLoaderId);
        this._iFadeSpeed = 200;
    }

    /**
     * Shows the loader
     * @return void
     */
    show() {
        this.loader.fadeIn(this._iFadeSpeed);
    }

    /**
     * Hides the loader
     * @return void
     */
    hide() {
        this.loader.fadeOut(this._iFadeSpeed);
    }
}
