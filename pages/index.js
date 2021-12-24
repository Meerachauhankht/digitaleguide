import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigitalGuide</title>
        <meta name="description" content="Credit Card Customer Care Number" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Customer Care Number</h1>



Visit official website <a href="https://digitaleguide.com”>https://digitaleguide.com</a>



<p>Credit Card Payment.net has been helping people pay their bills online since 2004</p>

<p>We provide detailed credit card and bill payment information from banks such as Bank of America, American Express, Citibank, etc, as well as US based retail store credit cards such as The Limited, Macy’s, Lowe’s, Home Depot, etc.</p>


<p>We also provide bill pay information for utility companies, insurance companies, mortgage lenders, cable and wireless providers, and just about any company that charges a bill.</p>


<p>Digitaleguide.com conveniently list account login info, customer service 800 numbers, pay-by-phone numbers, and account mailing addresses. Digitaleguide.com also provides video tutorials showing you how to quickly and easily navigate a biller’s website in order to pay your bill.</p>


<p>The reason for this site is simple. Because there is so much competitive marketing information from one company to the next, many times a large company will unknowingly or unintentionally bury important information on its website making it difficult for its customer to find the information and pay their bills in a timely fashion.</p>



<p>The credit card industry alone takes in over $10 billion in penalty fees (late fees, over limit fees, etc.) each year.</p>



<h2>Credit Card Customer Care</h2>

Digitaleguide.com provides this important information along with a bit about the various credit programs so that you can quickly contact the relevant company, resolve any issue you may have, or make your bill payment on time and avoid costly late fees.



<h2>Customer Care Number</h2>



</div>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
