import Layout from "@/components/Layout";
import TweetsPage, { TweetsPageProps } from "@/components/TweetsPage";
import formatAboutText from "@/utils/formatAboutText";
import listTweets from "@/utils/listTweets";

type AboutPageProps = {
  rawAbout: string;
  metrics: {
    accuracy: number;
    f1_score: number;
    precision: number;
    recall: number;
  };
};

export async function getStaticProps() {
  const res = await fetch("http://hermesproject.pythonanywhere.com/", {
    headers: new Headers({
      "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG",
    }),
  });

  const data = await res.json();

  const metricsRes = await fetch(
    "http://hermesproject.pythonanywhere.com/metrics",
    {
      headers: new Headers({
        "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG",
      }),
    }
  );

  const metrics = await metricsRes.json();

  return { props: { rawAbout: data.description, metrics } };
}

export default function About({ rawAbout, metrics }: AboutPageProps) {
  const about = formatAboutText(rawAbout);

  return (
    <>
      <Layout>
        <div className={`pt-6 text-4xl font-bold`}>{about.title}</div>

        <div className={`p-14`}>
          <div className={``}>
            {about.description.map((text, index) => (
              <>
                <p key={index}>{text}</p>
                <br />
              </>
            ))}
          </div>
          <div className={`pt-6`}>
            <h1 className={`text-lg font-bold`}>Metrics:</h1>
            <br />
            {
              <>
                <p>- Accuracy: {metrics.accuracy.toFixed(2)}%</p>
                <br />
                <p>- F1 Score: {metrics.f1_score.toFixed(2)}%</p>
                <br />
                <p>- Precision: {metrics.precision.toFixed(2)}%</p>
                <br />
                <p>- Recall: {metrics.recall.toFixed(2)}%</p>
                <br />
              </>
            }
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Features</h1>
            <br />
            {about.features.map((text, index) => (
              <>
                <p key={index}>{text}</p>
                <br />
              </>
            ))}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Usage</h1>
            <br />
            {about.usage.map((text, index) => (
              <>
                <p key={index}>{text}</p>
                <br />
              </>
            ))}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Legal Disclaimer</h1>
            <br />
            {about.legalDisclaimer.map((text, index) => (
              <>
                <p key={index}>{text}</p>
                <br />
              </>
            ))}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Contact</h1>
            <br />
            {about.contact.map((text, index) => (
              <>
                <p key={index}>{text}</p>
                <br />
              </>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
