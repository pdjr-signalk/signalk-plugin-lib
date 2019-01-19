/**
 * Module giving quick access to Kelly colors.
 *
 * const Kellycolors = require("./lib/kellycolors.js");
 * var colors = new Kellycolors();
 * ...
 * var color = colors.getNextColor(); 
 */

"use strict";

module exports = class Kellycolors {

    /**
     * Create a new Kellycolors object initialised with 20 easily distinguished
     * colors.
     */
    constructor() {
        this.colors  = [
            '#F3C300',
            '#875692',
			'#F38400',
			'#A1CAF1',
			'#BE0032',
			'#C2B280',
			'#848482',
			'#008856',
			'#E68FAC',
			'#0067A5',
			'#F99379',
			'#604E97',
			'#F6A600',
			'#B3446C',
			'#DCD300',
			'#882D17',
			'#8DB600',
			'#654522',
			'#E25822',
			'#2B3D26'
        ];
    }

    /**
     * Get a new color from the library of colours.  Successive calls will
     * cycle through the set of available colours.
     */
    getNextColor = function() {
        var retval = KELLY_COLORS.shift();
        KELLY_COLORS.push(retval);
        return(retval);
    }

    /**
     * Get an array of <n> colors from the library of colors.
     */
    getColors = function(n) {
        return(KELLY_COLORS.slice(-n));
    }

}
