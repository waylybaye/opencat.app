import Head from "next/head"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#343541] dark:text-white">
      <Head>
        <title>Privacy</title>
      </Head>
      <div className="text-base md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 lg:px-0 m-auto">
        <main>
          <h1 className="text-5xl mb-10 font-extrabold text-center text-gray-900 dark:text-white"> Privacy Policy </h1>
          <div className="text-lg">
            We take your privacy very seriously. This policy outlines how we collect, use, and protect your personal information.
            <br />

            <h3 className="text-lg font-bold mb-2">
              Information We Collect:
            </h3>

            We only collect analytical and crash data. This data includes information about how you use our app, device information, and crash reports. We use this data to improve the performance and stability of our app.

            <h3 className="text-lg font-bold mb-2">
              How We Use Your Information:
            </h3>

            We use the data we collect to analyze user behavior and improve the performance of our app. We may also use this data to troubleshoot technical issues and improve user experience.

            <h3 className="text-lg font-bold mb-2">

              How We Protect Your Information:
            </h3>

            We take appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. We limit access to your information to those who need it to perform their job functions.

            We do not sell or share your personal information with third parties.

            <h3 className="text-lg font-bold mb-2">
              Updates to This Policy:
            </h3>

            We may update this policy from time to time. Any changes to this policy will be posted on our website.

          </div>
        </main>
      </div>
    </div>
  )
}
