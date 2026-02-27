/**
 * Survey Manager
 * 
 * This utility handles the logic for displaying, completing, and dismissing
 * the user survey. it relies on localStorage to persist state.
 */

/**
 * Checks if the user has consented to survey cookies.
 * Consented preferences are stored in 'cookiePrefs' in localStorage.
 * @returns {boolean} True if the user has allowed survey cookies.
 */
export const canShowSurvey = () => {
    const cookiePrefs = localStorage.getItem("cookiePrefs");
    if (!cookiePrefs) return false;

    const prefs = JSON.parse(cookiePrefs);
    return prefs.survey === true;
};

/**
 * Checks if the user has already completed the survey.
 * @returns {boolean} True if 'surveyCompleted' is set to 'true'.
 */
export const hasCompletedSurvey = () => {
    return localStorage.getItem("surveyCompleted") === "true";
};

/**
 * Marks the survey as completed in localStorage.
 * Records both the completion status and the timestamp.
 */
export const markSurveyCompleted = () => {
    localStorage.setItem("surveyCompleted", "true");
    localStorage.setItem("surveyCompletedDate", new Date().toISOString());
};

/**
 * Checks if the user has dismissed (closed) the survey without completing it.
 * @returns {boolean} True if 'surveyDismissed' is set to 'true'.
 */
export const hasDismissedSurvey = () => {
    return localStorage.getItem("surveyDismissed") === "true";
};

/**
 * Marks the survey as dismissed in localStorage.
 * Records both the dismissal status and the timestamp.
 */
export const dismissSurvey = () => {
    localStorage.setItem("surveyDismissed", "true");
    localStorage.setItem("surveyDismissedDate", new Date().toISOString());
};

/**
 * Determines whether the survey should be displayed to the user.
 * 
 * Conditions for showing:
 * 1. User has consented to survey cookies.
 * 2. User has NOT completed the survey.
 * 3. User has NOT dismissed the survey.
 * 
 * @returns {boolean} True if all conditions are met.
 */
export const shouldShowSurvey = () => {
    return (
        canShowSurvey() &&
        !hasCompletedSurvey() &&
        !hasDismissedSurvey()
    );
};
