/**
 * Cookie Policy Page
 * 
 * Provides information to users about the types of cookies used on the website
 * and why they are used (Analytical, Advertising, Survey).
 */
export default function Cookies() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>

            <p className="mb-4">
                We use analytical cookies to understand how visitors interact
                with our website and improve user experience.
            </p>

            <ul className="list-disc ml-6 text-gray-700">
                <li>Analytical cookies – page views & traffic analysis</li>
                <li>Advertising cookies – personalized ads (if enabled)</li>
                <li>Survey cookies – feedback tracking</li>
            </ul>
        </div>
    );
}
