/**
 * Cookie Preferences Manager
 * 
 * Provides utility functions to interact with user cookie preferences
 * stored in the browser's localStorage.
 */

/**
 * Retrieves the current cookie preferences from localStorage.
 * @returns {Object|null} The parsed preferences object or null if not set.
 */
export const getPrefs = () => {
    const data = localStorage.getItem("cookiePrefs");
    return data ? JSON.parse(data) : null;
};

/**
 * Saves the user's cookie preferences to localStorage.
 * @param {Object} prefs - The preferences object to save (e.g., { analytics: true, survey: true }).
 */
export const setPrefs = (prefs) => {
    localStorage.setItem("cookiePrefs", JSON.stringify(prefs));
};
