import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='Scss/style.scss' />
        <title>About</title>
        <meta name='About us' content='4' />
      </Head>
      <div>
        <h2>Hello</h2>
        <span className='mt--30  px--20 rounded py--12 slate-400'>Submit</span>
      </div>
    </>
  );
};

export default about;
