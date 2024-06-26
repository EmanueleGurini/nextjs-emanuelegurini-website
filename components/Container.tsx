import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export default function Container(props: any) {
  const { children, title, description, type, image, date } = props;
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://emanuelegurini.com${router.asPath}`}
        />
        <link rel="shortcut icon" href="/avatar.jpg" />
        <link
          rel="canonical"
          href={`https://emanuelegurini.com${router.asPath}`}
        />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Emanuele Gurini" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`https://www.emanuelegurini.com${image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EmanueleGurini" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://www.emanuelegurini.com${image}`}
        />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
      <div className="w-full text-center bg-violet-200 p-4 m-0">
        <p>
          I want to thank{" "}
          <a className="font-bold" href="https://leerob.io/">
            Lee Robinson
          </a>{" "}
          for his amazing theme that I stole
        </p>
      </div>
    </div>
  );
}

Container.defaultProps = {
  title:
    "Emanuele Gurini – Software Developer, Analyst, curious mind, and creator",
  description: `Emanuele Gurini is a Software Analyst working for Astrorei. He uses his blog to document and share information about computer science that interests him and that he encounters on a daily basis.`,
  image:
    "https://www.emanuelegurini.com/static/images/cover-emanuele-gurini-min.jpg",
  type: "website",
};
