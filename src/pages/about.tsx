import Layout from "@/components/Layout";
import TweetsPage, { TweetsPageProps } from "@/components/TweetsPage";
import formatAboutText from "@/utils/formatAboutText";
import listTweets from "@/utils/listTweets";

type AboutPageProps = {
  rawAbout: string;
};

export async function getStaticProps() {
  // const res = await fetch("http://hermesproject.pythonanywhere.com/", {
  //   headers: new Headers({
  //     "X-API-Key": "Q%o4V#h6Rt@1m5Z&9aG",
  //   }),
  // });

  // const data = await res.json();

  const data = {
    title: "Project Hermes",
    description: [
      "Project Hermes is an algorithm that uses machine learning techniques to classify figures of speech in tweets. Currently, the algorithm uses Support Vector Machine (SVM) for this classification. Another SVM will be added soon to classify the words present in the figures of speech.",
      "The algorithm no longer uses web scraping to collect tweets. Initially, web scraping was used, but due to conflicts with API hosting, a database with 1,600,000 tweets was used instead. The link to the database is: https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download. However, the other datasets used to train the algorithm were obtained from sources that were not properly credited. We apologize for this lack of credits, but the datasets will be available in the GitHub link: https://github.com/Mentorzx/Hermes.",
      "The algorithm analyzes the collected tweets and classifies the figures of speech found in them. The goal is to identify and evaluate the opinions of Twitter users about certain subjects, using natural language processing and machine learning techniques.",
    ],
    features: [
      "Project Hermes has the following features:",
      "- Tweet collection: The algorithm uses a database with 1,600,000 tweets to perform the analysis of figures of speech. The tweets are pre-classified into figures of speech, such as figurative, ironic, regular, and sarcastic.",
      "- Classification of figures of speech: The algorithm uses Support Vector Machine (SVM) to classify the figures of speech present in the tweets.",
      "- Sentiment classification: The algorithm uses Support Vector Machine (SVM) to classify whether the searched keywords have a negative or positive sentiment according to the found tweets.",
      "- Keyword insertion: It is possible to search for your own keyword, analyze its sentiment, and retrieve the tweets with their respective figures of speech.",
      "- Retrieving current Brazilian trends.",
    ],
    usage: [
      "To use Project Hermes, follow the steps below:",
      "1. Set up the environment: Make sure you have the necessary dependencies installed in your development environment. Refer to the requirements.txt file (still under development) for a complete list of dependencies and their corresponding versions.",
      "2. Configuration of the config.yml file: The config.yml file contains the algorithm's configurations, such as Twitter access credentials and other relevant settings. Fill in all the necessary information correctly before running the algorithm.",
      "3. Running the algorithm: Run the main.py file to start the API for the analysis of figures of speech in tweets. The algorithm will use the database of 1,600,000 tweets to perform the classification.",
      "Using the API",
      "The Project Hermes API allows you to make queries and obtain results through HTTP requests. Below are examples of how to use the API with cURL:",
      "1. Search for a keyword:",
      '("Potato" as an exemple)',
      'curl -X POST -H "Content-Type: application/json" -H "{insert key here without "}"}" -d \'{"keyword": "potato"}\' http://hermesproject.pythonanywhere.com/search',
      "2. Get the sentiment of the trends:",
      'curl -X GET -H "{insert key here without "}"}" http://hermesproject.pythonanywhere.com/trends',
      "3. Get only the trends (without sentiment):",
      'curl -X GET -H "{insert key here without "}"}" http://hermesproject.pythonanywhere.com/',
      'The above changes add the option to specify the page on which you want to get trend sentiment. Simply replace `{insert key here without "}"}` with the correct key from the `config.yml` file and insert the desired page number in `?page=1` (for example, `?page=1` for the first page, `?page=2` for the second page, and so on).',
      "To clear the cache, you can use the following command:",
      "curl -X POST http://hermesproject.pythonanywhere.com/clear_cache",
      "Please remember to follow the applicable policies and terms of use when using the API.",
    ],
    legalDisclaimer: [
      "Project Hermes was developed exclusively for academic purposes and to enhance the resume of the developer Alex Lira. Web scraping initially used to collect tweets was replaced by a database of 1,600,000 tweets. The link to the database is: https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download. The other datasets used in training the algorithm were obtained from sources that were not properly credited. The datasets will be available in the GitHub link: https://github.com/Mentorzx/Hermes.",
      "Developer Alex Lira is not responsible for any misuse or rights violations resulting from the use of Project Hermes. The user is solely responsible for ensuring that their use complies with the applicable policies and terms of use.",
    ],
    contact: [
      "For more information about Project Hermes or to contact developer Alex Lira, you can access his profile on GitHub.",
      "Website developed by Jéssica Andrade and João Paulo Rios (Front-End Team) and Alex Lira (Back-end).",
    ],
  };

  // return { props: { rawAbout: data.description } };
  return { props: { rawAbout: data } };
}

export default function About({ rawAbout }: AboutPageProps) {
  const about = formatAboutText(rawAbout);

  return (
    <>
      <Layout>{about["description"][0]}</Layout>
    </>
  );
}
