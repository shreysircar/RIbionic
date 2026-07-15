import Navbar from "@/components/layout/Navbar";

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />

   <main
  className="min-h-screen text-[#292524]"
  style={{
    background:
      "linear-gradient(to bottom, #025a6a 0%, #4a9eb3 22%, #d9eef2 42%, #fafafa 62%)",
  }}
>


        {/* Hero */}
        <section className="pt-36 pb-16">
          <div className="mx-auto max-w-5xl px-6">
            <span className="inline-block rounded-full border border-white/30 bg-white/15 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
              LekhaJokha
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Delete Your Account
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">
              If you no longer wish to use LekhaJokha, you may request the
              permanent deletion of your account and associated personal data.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-10 rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">

              {/* Request */}
              <div>
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  How to request account deletion
                </h2>

                <ol className="mt-5 list-decimal space-y-3 pl-6 text-neutral-700">
                  <li>
                    Send an email to{" "}
                    <a
                      href="mailto:support@ribionic.com"
                      className="font-medium text-[#025a6a] hover:underline"
                    >
                      support@ribionic.com
                    </a>
                  </li>

                  <li>
                    Use the subject line:
                    <div className="mt-2 inline-block rounded-lg bg-neutral-100 px-3 py-2 font-medium">
                      Delete LekhaJokha Account
                    </div>
                  </li>

                  <li>
                    Send the request using the same email address registered
                    with your LekhaJokha account.
                  </li>

                  <li>
                    We may contact you to verify your identity before processing
                    your request.
                  </li>
                </ol>
              </div>

              {/* Deleted */}
              <div>
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  What will be deleted
                </h2>

                <p className="mt-4 text-neutral-700">
                  After successful verification, we will permanently delete the
                  following information associated with your account:
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6 text-neutral-700">
                  <li>Your LekhaJokha account</li>
                  <li>Registered name</li>
                  <li>Email address</li>
                  <li>Phone number (if stored)</li>
                  <li>Postal address</li>
                  <li>Device registration information</li>
                  <li>Other personal account information stored on Ribionic servers</li>
                </ul>
              </div>

              {/* Device */}
              <div>
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  Data stored on your device
                </h2>

                <p className="mt-4 leading-7 text-neutral-700">
                  LekhaJokha stores your documents and personal records locally
                  on your own device. Deleting your online account does not
                  automatically remove data stored on your device.
                </p>

                <p className="mt-4 leading-7 text-neutral-700">
                  To remove local data, uninstall the application or clear the
                  app data from your device settings before uninstalling.
                </p>
              </div>

              {/* Retained */}
              <div>
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  Data that may be retained
                </h2>

                <p className="mt-4 text-neutral-700">
                  Certain information may be retained where required by law or
                  for legitimate business purposes, including:
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6 text-neutral-700">
                  <li>Payment transaction records</li>
                  <li>Tax and GST records</li>
                  <li>Subscription and licence history</li>
                  <li>
                    Records required for accounting, auditing, fraud prevention,
                    dispute resolution, or compliance with legal obligations.
                  </li>
                </ul>

                <p className="mt-5 leading-7 text-neutral-700">
                  Any retained information is securely stored and is not used
                  for marketing purposes or normal operation of your deleted
                  account.
                </p>
              </div>

              {/* Processing */}
              <div>
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  Processing time
                </h2>

                <p className="mt-4 text-neutral-700">
                  Verified deletion requests are normally processed within{" "}
                  <strong>7 business days.</strong>
                </p>
              </div>

              {/* Contact */}
              <div className="rounded-2xl bg-[#025a6a]/5 p-6">
                <h2 className="text-2xl font-semibold text-[#025a6a]">
                  Contact
                </h2>

                <p className="mt-4 font-medium text-neutral-800">
                  Ribionic Solutions Private Limited
                </p>

                <p className="mt-2 text-neutral-700">
                  Email:{" "}
                  <a
                    href="mailto:support@ribionic.com"
                    className="font-medium text-[#025a6a] hover:underline"
                  >
                    support@ribionic.com
                  </a>
                </p>

                <p className="mt-4 text-neutral-700">
                  Privacy Policy:{" "}
                  <a
                    href="/privacy/lekhajokha"
                    className="font-medium text-[#025a6a] hover:underline"
                  >
                    https://www.ribionic.com/privacy/lekhajokha
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}