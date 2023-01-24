import Head from "next/head";
import Layout, { siteTitle, name } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, Post } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Witaj, mam na imię {name}. Jestem programistą. Możesz się ze mną
          skontaktować poprzez <a href="https://facebook.com/">Facebook</a>.
        </p>
        <p>
          (To jest przykładowa strona - będziesz budował strony podobne do tej{" "}
          <a href="https://nextjs.org/learn">w naszym poradniku Next.js</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//statyczne generowanie przy buildzie
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//renderowanie przy każdym zapytaniu
// export async function getServerSideProps(context) {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
