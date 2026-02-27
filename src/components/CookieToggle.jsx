/**
 * Cookie Toggle Component
 * 
 * A reusable UI component for toggling specific cookie preferences (e.g., Analytics, Ads).
 * Useful within a settings modal or cookie consent banner.
 */

/**
 * CookieToggle Component
 * 
 * Props:
 * - label: The text to display next to the toggle.
 * - checked: Boolean representing the current state of the toggle.
 * - onChange: Callback function triggered when the toggle is changed.
 */
export default function CookieToggle({ label, checked, onChange }) {
    return (
        <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-700">{label}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 accent-blue-600"
            />
        </div>
    );
}
