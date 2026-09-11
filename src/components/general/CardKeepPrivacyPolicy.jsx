const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* App Header */}
                <div className="text-center mb-12">
                    <img
                        src="/cardkeep-icon.png"
                        alt="CardKeep Logo"
                        className="mx-auto h-20 w-20 rounded-2xl mb-4"
                    />

                    <h2 className="text-2xl font-bold text-white">
                        CardKeep
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                        Warranty information, stored locally.
                    </p>

                    <div className="inline-block mt-4 px-4 py-2 rounded-full
                        bg-white/5 border border-white/10 text-xs text-gray-400">
                        Currently available for Android on the Indus App Store
                    </div>
                </div>

                {/* Privacy Policy */}
                <div className="space-y-8">

                    <div>
                        <h1 className="text-3xl font-bold text-white mb-3">
                            Privacy Policy
                        </h1>

                        <p className="text-sm text-gray-500">
                            Last updated: September 11, 2026
                        </p>
                    </div>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Overview
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep is a privacy-focused application designed to
                            help you store and organize product warranty
                            information on your device. CardKeep does not require
                            an account or signup and does not send your personal
                            information or warranty data to our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Data Storage
                        </h2>

                        <p className="text-gray-400 leading-7">
                            All information you add to CardKeep is stored locally
                            on your device. This may include product names,
                            warranty details, purchase information, product
                            images, uploaded documents, and other information
                            that you choose to enter.
                        </p>

                        <p className="text-gray-400 leading-7 mt-3">
                            CardKeep does not maintain a cloud database or
                            remotely store your warranty information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Camera, OCR & Scanning
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep may use your device's camera to scan
                            barcodes, QR codes, or warranty-related information.
                            The app may also use on-device OCR (Optical Character
                            Recognition) to detect text from images.
                        </p>

                        <p className="text-gray-400 leading-7 mt-3">
                            These processing operations are performed locally on
                            your device. The images and text processed by these
                            features are not uploaded to CardKeep servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Images & Documents
                        </h2>

                        <p className="text-gray-400 leading-7">
                            You may choose to add product images, warranty card
                            images, PDFs, or other warranty-related documents.
                            These files remain on your device and are used only
                            for the functionality provided by CardKeep.
                        </p>

                        <p className="text-gray-400 leading-7 mt-3">
                            CardKeep does not upload these files to external
                            servers or use them for advertising, analytics, or
                            machine-learning training.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Information We Collect
                        </h2>

                        <p className="text-gray-400 leading-7">
                            We do not collect, store, sell, or share personal
                            information through CardKeep.
                        </p>

                        <ul className="list-disc list-inside text-gray-400
                            leading-7 mt-3 space-y-1">
                            <li>No account or signup information</li>
                            <li>No name, email address, or phone number collection</li>
                            <li>No warranty data collection</li>
                            <li>No product images or documents uploaded to our servers</li>
                            <li>No location tracking</li>
                            <li>No advertising profile</li>
                            <li>No sale or sharing of user data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Third-Party Services
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep is designed to perform its core functionality
                            locally on your device. We do not use your warranty
                            information for third-party advertising, profiling,
                            or data collection.
                        </p>

                        <p className="text-gray-400 leading-7 mt-3">
                            CardKeep may use Android system capabilities and
                            libraries required for features such as camera
                            access, barcode/QR scanning, and on-device text
                            recognition. These features operate according to
                            their respective platform or library implementations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Internet Access
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep does not require an account or an internet
                            connection to store and manage your warranty
                            information. If you use a QR code or warranty
                            registration URL that opens an external website,
                            that website is outside CardKeep's control and is
                            subject to its own privacy policy and terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Data Deletion
                        </h2>

                        <p className="text-gray-400 leading-7">
                            Because your data is stored locally, you can remove
                            your saved warranty information directly within the
                            app. Uninstalling the application may also remove
                            locally stored application data according to your
                            device's Android settings and storage behavior.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Children's Privacy
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep does not knowingly collect personal
                            information from children or other users because the
                            app does not require an account or transmit personal
                            information to our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Changes to This Policy
                        </h2>

                        <p className="text-gray-400 leading-7">
                            We may update this Privacy Policy when CardKeep's
                            functionality changes or when necessary to clarify
                            how the application handles data. Any updated version
                            will be published on this page with a revised
                            "Last updated" date.
                        </p>
                    </section>

                    {/* Privacy Highlight */}
                    <div className="rounded-2xl border border-white/10
                        bg-white/[0.03] p-6 mt-10">
                        <h2 className="text-lg font-semibold text-white mb-2">
                            Your data stays with you.
                        </h2>

                        <p className="text-gray-400 leading-7">
                            CardKeep was built with a simple principle:
                            your warranty information belongs to you. The app
                            stores and processes your information locally on
                            your device rather than sending it to us.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Contact
                        </h2>

                        <p className="text-gray-400 leading-7">
                            If you have questions, concerns, or feedback about
                            this Privacy Policy or CardKeep, please contact the
                            developer through the contact information provided
                            on the CardKeep application store page.
                        </p>
                    </section>

                </div>

                {/* Footer */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} CardKeep. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;