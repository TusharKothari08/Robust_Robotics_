/**
 * Cookie Banner Component
 * 
 * A top-fixed banner that asks users for cookie consent.
 * It provides options to accept all cookies or reject them.
 */

/**
 * CookieBanner Component
 * 
 * Props:
 * - onAccept: Callback function triggered when the user clicks 'Accept'.
 * - onReject: Callback function triggered when the user clicks 'Reject'.
 */
export default function CookieBanner({ onAccept, onReject }) {
    return (
        <div className="fixed top-0 left-0 w-full bg-yellow-400 text-white z-[99999]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">

                <p className="text-sm text-gray-200">
                    We use cookies to improve your experience. Read our{" "}
                    <a href="/cookies" className="underline text-blue-400">
                        Cookie Policy
                    </a>.
                </p>

                <div className="flex gap-2">
                    <button
                        onClick={onReject}
                        className="px-3 py-1 text-sm rounded bg-gray-600 hover:bg-gray-500"
                    >
                        Reject
                    </button>

                    <button
                        onClick={onAccept}
                        className="px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-500"
                    >
                        Accept
                    </button>
                </div>

            </div>
        </div>
    );
}
