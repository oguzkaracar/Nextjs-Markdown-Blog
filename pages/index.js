import Head from 'next/head';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

import { siteTitle } from '../components/seoHead';
import Layout from '../components/layout';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="main-content">
        <h1>Merhaba, ben Oğuzhan 👋</h1>
        <p>
          Frontend development ile ilgili güncel yazılara, içeriklere, notlara
          ve ipuçlarına ulaşabileceğiniz kişisel blog sayfama hoş geldiniz.
          Genellikle html, css, javascript, react ve modern frontend development
          ile ilgili içerikler paylaşıyor olacağım.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
