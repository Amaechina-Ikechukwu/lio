export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <title>Terms and Conditions</title>

      <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          Welcome to Lio. By using or accessing the Web App in any way, you
          agree to comply with and be bound by these Terms and Conditions. If
          you do not agree to these terms, please do not use the Web App.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">2. Changes to Terms</h2>
        <p>
          We reserve the right to modify or revise these Terms and Conditions at
          any time without notice. Your continued use of the Web App following
          any changes constitutes acceptance of those changes.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">3. Privacy Policy</h2>
        <p>
          Your use of the Web App is also governed by our Privacy Policy. Please
          review our Privacy Policy to understand how we collect, use, and
          protect your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          4. User Registration
        </h2>
        <p>
          To access certain features of the Web App, you may need to register
          for an account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          5. Content and User Conduct
        </h2>
        <p>
          a. You are solely responsible for all content you post, upload, or
          share on the Web App, including but not limited to text, images,
          videos, and links.
        </p>
        <p>
          b. You agree not to use the Web App for any unlawful or prohibited
          purpose, and you will not engage in any activity that violates any
          applicable laws or regulations.
        </p>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
