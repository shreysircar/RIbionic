import Footer from "@/components/layout/Footer";

export default function LekhaJokhaPrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Hero Section with Smooth Gradient */}
      <section className="relative overflow-hidden pt-40 pb-20">
        {/* Smoother gradient with more color stops */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#025a6a] via-[#036d80] via-[#1a8a9e] to-[#4a9eb3]" />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
        
        {/* Decorative blur circles for depth */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4a9eb3]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#025a6a]/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6">
          <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-sm shadow-lg">
            📄 Privacy Policy
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            LekhaJokha<br />
            <span className="text-white/90">Privacy Policy</span>
          </h1>

          <p className="mt-4 text-lg text-white/80 flex items-center gap-2">
            <span>📅</span> Last Updated: June 2026
          </p>
          
          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
        </div>
      </section>

      {/* Content - with better spacing and visual polish */}
      <section className="relative -mt-8 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Decorative card-like container with shadow */}
          <div className="bg-white rounded-2xl shadow-xl shadow-[#025a6a]/5 p-8 md:p-12">
            
            <article
              className="
                prose
                prose-lg
                max-w-none
                prose-headings:font-bold
                prose-headings:text-[#025a6a]
                prose-h2:text-3xl
                prose-h2:border-b
                prose-h2:border-[#025a6a]/15
                prose-h2:pb-3
                prose-h2:mt-12
                prose-h2:first:mt-0
                prose-h3:text-xl
                prose-h3:text-[#4a9eb3]
                prose-h3:mt-8
                prose-p:text-stone-700
                prose-p:leading-8
                prose-p:mt-4
                prose-strong:text-[#025a6a]
                prose-strong:font-semibold
                prose-li:marker:text-[#4a9eb3]
                prose-li:text-stone-700
                prose-ul:mt-3
                prose-ul:mb-6
                prose-li:my-1.5
                prose-li:pl-1
                prose-a:text-[#4a9eb3]
                prose-a:no-underline
                prose-a:hover:underline
              "
            >
              <p className="text-lg leading-relaxed">
                LekhaJokha is a personal productivity, document management, expense
                tracking, subscription management, renewal tracking, warranty management,
                and task management application developed and operated by Ribionic
                Solutions Private Limited ("Ribionic", "we", "our", or "us").
              </p>

              <p className="text-lg leading-relaxed">
                We believe your personal information and documents belong to you.
                LekhaJokha has been designed with a privacy-first approach that gives users
                control over their data while minimizing the amount of information stored
                on Ribionic-operated systems.
              </p>

              <p className="text-lg leading-relaxed">
                This Privacy Policy explains what information we collect, how we use it,
                and how we protect it when you use the LekhaJokha mobile application,
                website, and related services.
              </p>

              <h2>1. Information We Collect</h2>

              <h3>Account Information</h3>
              <p>
                When you create an account, verify your email address, activate a trial,
                purchase a subscription, or use certain services, we may collect:
              </p>

              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Country</li>
                <li>State</li>
                <li>Postal address</li>
                <li>GSTIN or tax identification information (where applicable)</li>
              </ul>

              <h3>Subscription and Licensing Information</h3>

              <p>
                To provide subscription-based services and license management, we may
                collect:
              </p>

              <ul>
                <li>Subscription plan information</li>
                <li>Subscription status</li>
                <li>License activation information</li>
                <li>License renewal information</li>
                <li>Payment verification information</li>
                <li>Device-related licensing information</li>
              </ul>

              <h3>Technical Information</h3>

              <p>
                We may collect limited technical information necessary for application
                functionality and security, including:
              </p>

              <ul>
                <li>Device type and model</li>
                <li>Operating system version</li>
                <li>Application version</li>
                <li>IP address</li>
                <li>Browser information</li>
                <li>Diagnostic information</li>
                <li>Error logs</li>
                <li>Usage information related to service functionality</li>
              </ul>

              <h2>2. User Documents and Content</h2>

              <p>LekhaJokha allows users to organize and manage:</p>

              <ul>
                <li>Bills and invoices</li>
                <li>Receipts</li>
                <li>Warranty documents</li>
                <li>Insurance records</li>
                <li>Certificates and academic records</li>
                <li>Contracts and agreements</li>
                <li>Personal identification records</li>
                <li>Photos and images</li>
                <li>Audio recordings</li>
                <li>Video files</li>
                <li>To-do items</li>
                <li>Reminders</li>
                <li>Subscription records</li>
                <li>Expense records</li>
                <li>Other personal content</li>
              </ul>

              <h3>Local-First Storage</h3>

              <p>
                User-uploaded documents, images, videos, audio recordings, and other
                personal content are stored locally on the user's device or in storage
                locations selected and controlled by the user.
              </p>

              <p className="bg-[#025a6a]/5 border-l-4 border-[#025a6a] p-5 rounded-r-lg">
                <strong>
                  Ribionic Solutions does not upload, store, host, process, analyze, view,
                  or retain copies of user documents, images, videos, audio recordings, or
                  backup files on Ribionic-owned servers as part of normal application
                  operation.
                </strong>
              </p>

              <p>Your documents remain under your control.</p>

              <h2>3. Backup and Restore</h2>

              <p>
                LekhaJokha includes optional backup and restore functionality.
              </p>

              <p>
                Backups are created using the device's native file system and are stored in
                locations selected by the user.
              </p>

              <p>Backup files may be stored:</p>

              <ul>
                <li>On the user's device</li>
                <li>On removable storage selected by the user</li>
                <li>
                  On third-party cloud storage services chosen and controlled by the user
                </li>
              </ul>

              <p>
                Ribionic Solutions does not receive, upload, store, maintain, or retain
                copies of user backup files on Ribionic-owned servers.
              </p>

              <p>Users are responsible for:</p>

              <ul>
                <li>Protecting backup files</li>
                <li>Securing access to backup locations</li>
                <li>Managing third-party storage services they choose to use</li>
              </ul>

              <h2>4. Camera Access</h2>

              <p>
                LekhaJokha may request access to the device camera to allow users to:
              </p>

              <ul>
                <li>Capture bills</li>
                <li>Capture invoices</li>
                <li>Capture receipts</li>
                <li>Capture warranty documents</li>
                <li>Capture supporting images for records</li>
              </ul>

              <p>Camera access is used only when initiated by the user.</p>

              <p>
                Images captured through the application remain stored on the user's device
                or in storage locations selected by the user.
              </p>

              <h2>5. File, Photo, Audio and Video Access</h2>

              <p>LekhaJokha may request access to:</p>

              <ul>
                <li>Device storage</li>
                <li>Documents</li>
                <li>Photos</li>
                <li>Videos</li>
                <li>Audio recordings</li>
              </ul>

              <p>This access is used solely to allow users to:</p>

              <ul>
                <li>Select files</li>
                <li>Upload files into their local vault</li>
                <li>Organize personal records</li>
                <li>View stored content</li>
                <li>Restore backups</li>
              </ul>

              <p>
                User files are not uploaded to Ribionic-owned servers as part of normal
                application operation.
              </p>

              <h2>6. Email Verification and Account Security</h2>

              <p>
                To protect user accounts and prevent unauthorized access, LekhaJokha uses
                email-based One-Time Password (OTP) verification.
              </p>

              <p>OTP verification may be used for:</p>

              <ul>
                <li>Account registration</li>
                <li>Account security</li>
                <li>License activation</li>
                <li>Subscription management</li>
                <li>Account recovery</li>
              </ul>

              <p>
                Verification-related information may be temporarily stored for security and
                service operation purposes.
              </p>

              <h2>7. Payments and Subscriptions</h2>

              <p>
                Paid subscriptions may be processed through trusted third-party payment
                providers, including Razorpay.
              </p>

              <p>We do not store:</p>

              <ul>
                <li>Credit card numbers</li>
                <li>Debit card numbers</li>
                <li>CVV numbers</li>
                <li>UPI PINs</li>
                <li>Net banking credentials</li>
                <li>Other sensitive payment credentials</li>
              </ul>

              <p>
                Payment information is processed directly by the payment provider under its
                own privacy and security policies.
              </p>

              <h2>8. How We Use Information</h2>

              <p>We use collected information to:</p>

              <ul>
                <li>Create and manage user accounts</li>
                <li>Verify user identity</li>
                <li>Provide subscription services</li>
                <li>Process subscription payments</li>
                <li>Manage licenses and renewals</li>
                <li>Provide customer support</li>
                <li>Improve application functionality</li>
                <li>Detect fraud and unauthorized activity</li>
                <li>Resolve technical issues</li>
                <li>Maintain service security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>9. Information Sharing</h2>

              <p>We do not sell personal information.</p>

              <p>We may share limited information with:</p>

              <h3>Payment Providers</h3>
              <p>For payment processing and subscription management.</p>
              <ul>
                <li>Razorpay</li>
              </ul>

              <h3>Email Service Providers</h3>
              <p>For OTP delivery, verification emails, and account-related communication.</p>

              <h3>Infrastructure Providers</h3>
              <p>
                For hosting account, subscription, licensing, and application services.
              </p>

              <h3>Legal Authorities</h3>
              <p>
                Where required by law, court order, regulation, or governmental request.
              </p>

              <h2>10. Data Storage and Security</h2>

              <p>
                We implement reasonable administrative, technical, and organizational
                safeguards designed to protect information under our control.
              </p>

              <p>Information stored on Ribionic-managed systems may include:</p>

              <ul>
                <li>Account information</li>
                <li>Subscription information</li>
                <li>License information</li>
                <li>Payment verification information</li>
                <li>Service-related records</li>
              </ul>

              <p>
                User-uploaded documents, photos, videos, audio recordings, and backup files
                are not stored on Ribionic-owned servers as part of normal application
                operation.
              </p>

              <p>
                Although we take reasonable measures to protect information, no method of
                electronic storage or transmission can guarantee absolute security.
              </p>

              <h2>11. Data Retention</h2>

              <p>
                We retain account and subscription-related information only as long as
                necessary to:
              </p>

              <ul>
                <li>Provide services</li>
                <li>Maintain user accounts</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce agreements</li>
              </ul>

              <p>
                Users remain responsible for the retention, backup, and management of their
                locally stored documents and files.
              </p>

              <h2>12. User Rights</h2>

              <p>Subject to applicable law, users may request:</p>

              <ul>
                <li>Access to personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of personal information held by Ribionic</li>
                <li>Account closure</li>
                <li>Withdrawal of consent where applicable</li>
              </ul>

              <p>
                Requests may be submitted using the contact information below.
              </p>

              <h2>13. Children's Privacy</h2>

              <p>
                LekhaJokha is not intended for children under the age of 13.
              </p>

              <p>
                We do not knowingly collect personal information from children under 13
                years of age. If we become aware that such information has been collected,
                we will take reasonable steps to remove it.
              </p>

              <h2>14. Third-Party Services</h2>

              <p>
                LekhaJokha may use third-party service providers, including:
              </p>

              <ul>
                <li>Payment processors</li>
                <li>Email delivery providers</li>
                <li>Analytics providers</li>
                <li>Diagnostic and crash reporting providers</li>
                <li>Infrastructure and hosting providers</li>
              </ul>

              <p>
                These providers operate under their own privacy policies and terms of
                service.
              </p>

              <h2>15. Changes to this Privacy Policy</h2>

              <p>
                We may update this Privacy Policy from time to time.
              </p>

              <p>
                Updated versions will be posted through the application, website, or both.
              </p>

              <p>
                Continued use of the application after updates become effective constitutes
                acceptance of the revised Privacy Policy.
              </p>

              <h2>16. Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy or your personal
                information, please contact:
              </p>

              <p className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <strong>Ribionic Solutions Private Limited</strong>
                <br />
                Email: <a href="mailto:support@ribionic.com" className="text-[#4a9eb3] hover:underline">support@ribionic.com</a>
                <br />
                Website: <a href="https://ribionic.com" className="text-[#4a9eb3] hover:underline">https://ribionic.com</a>
                <br />
                Registered Office Address:
                <br />
                E-111 Sector 21, Noida – 201301, Uttar Pradesh, India
              </p>

              <h2>Our Privacy Commitment</h2>

              <p>
                LekhaJokha was built on a simple principle:
              </p>

              <p className="text-xl font-semibold text-[#025a6a] text-center py-4">
                Your documents belong to you.
              </p>

              <p>
                Your bills, invoices, certificates, warranties, photos, videos, audio
                files, reminders, and personal records remain under your control and are
                not stored on Ribionic-owned servers as part of the application's normal
                operation.
              </p>

              <p>
                We aim to provide useful tools for organizing your life without turning
                your personal information into a product.
              </p>

              <p className="text-center text-stone-500 text-sm border-t border-stone-200 pt-6 mt-8">
                By using LekhaJokha, you acknowledge that you have read, understood, and
                agreed to this Privacy Policy.
              </p>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}