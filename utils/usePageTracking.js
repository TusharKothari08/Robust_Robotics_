/**
 * Page Tracking Hook
 * 
 * A custom React hook that automatically tracks page views using Google Analytics
 * whenever the user navigates to a new route.
 */

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * usePageTracking Hook
 * 
 * Hooks used:
 * - useLocation: To detect when the URL path changes.
 * - useEffect: To trigger the analytics event whenever the location changes.
 * 
 * Functionality:
 * Whenever the `location` object (from react-router-dom) updates, this hook
 * checks if `window.gtag` is available (initialized in analytics.js) and
 * sends a 'page_view' event with the current pathname.
 */
export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        // Only track if Google Analytics is initialized
        if (window.gtag) {
            window.gtag("event", "page_view", {
                page_path: location.pathname,
            });
        }
    }, [location]); // Re-run whenever the location changes
}
