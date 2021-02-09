import Head from "next/head";
import Billboard from "@components/Billboard";
import styles from "./BlogPost.module.css";
import { buildCloudinaryURL } from "@utils/cloudinary";

export default function BlogPost({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={`${buildCloudinaryURL(meta.title)}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@theworstdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Billboard title={meta.title} />
      <article className={styles.post}>{children}</article>
    </>
  );
}