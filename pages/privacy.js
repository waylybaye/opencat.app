import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <h1 className={styles.title}>
          Privacy Policy
        </h1>

        <p className={styles.description}>
          We take your privacy very seriously. This policy outlines how we collect, use, and protect your personal information.
          <br/>

          <h3>
            Information We Collect:
          </h3>

          We only collect analytical and crash data. This data includes information about how you use our app, device information, and crash reports. We use this data to improve the performance and stability of our app.

          <h3>
            How We Use Your Information:
          </h3>

          We use the data we collect to analyze user behavior and improve the performance of our app. We may also use this data to troubleshoot technical issues and improve user experience.

          <h3>

            How We Protect Your Information:
          </h3>

          We take appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. We limit access to your information to those who need it to perform their job functions.

          We do not sell or share your personal information with third parties.

          <h3>
            Updates to This Policy:
          </h3>

          We may update this policy from time to time. Any changes to this policy will be posted on our website.

          {/*<h3> Contact Us: </h3>*/}
          
          {/*If you have any questions or concerns about our privacy policy, please contact us at [insert contact information].*/}
        </p>
      </main>
    </div>
  )
}
