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
    "description": "\n        Project Hermes\n\n        Description\n\n        Project Hermes is an algorithm that uses machine learning techniques to classify figures of speech in tweets. Currently, the algorithm uses Support Vector Machine (SVM) for this classification. Another SVM will be added soon to classify the words present in the figures of speech.\n\n        The algorithm no longer uses web scraping to collect tweets. Initially, web scraping was used, but due to conflicts with API hosting, a database with 1,600,000 tweets was used instead. The link to the database is: https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download. However, the other datasets used to train the algorithm were obtained from sources that were not properly credited. We apologize for this lack of credits, but the datasets will be available in the GitHub link: https://github.com/Mentorzx/Hermes.\n\n        The algorithm analyzes the collected tweets and classifies the figures of speech found in them. The goal is to identify and evaluate the opinions of Twitter users about certain subjects, using natural language processing and machine learning techniques.\n\n        Features\n\n        Project Hermes has the following features:\n\n        - Tweet collection: The algorithm uses a database with 1,600,000 tweets to perform the analysis of figures of speech. The tweets are pre-classified into figures of speech, such as figurative, ironic, regular, and sarcastic.\n\n        - Classification of figures of speech: The algorithm uses Support Vector Machine (SVM) to classify the figures of speech present in the tweets.\n\n        - Sentiment classification: The algorithm uses Support Vector Machine (SVM) to classify whether the searched keywords have a negative or positive sentiment according to the found tweets.\n\n        - Keyword insertion: It is possible to search for your own keyword, analyze its sentiment, and retrieve the tweets with their respective figures of speech.\n\n        - Retrieving current Brazilian trends.\n\n        Usage\n\n        To use Project Hermes, follow the steps below:\n\n        1. Set up the environment: Make sure you have the necessary dependencies installed in your development environment. Refer to the requirements.txt file (still under development) for a complete list of dependencies and their corresponding versions.\n\n        2. Configuration of the config.yml file: The config.yml file contains the algorithm's configurations, such as Twitter access credentials and other relevant settings. Fill in all the necessary information correctly before running the algorithm.\n\n        3. Running the algorithm: Run the main.py file to start the API for the analysis of figures of speech in tweets. The algorithm will use the database of 1,600,000 tweets to perform the classification.\n\n        Using the API\n\n        The Project Hermes API allows you to make queries and obtain results through HTTP requests. Below are examples of how to use the API with cURL:\n\n        1. Search for a keyword:\n        (\"Potato\" as an exemple)\n        curl -X POST -H \"Content-Type: application/json\" -H \"{insert key here without \"}\"}\" -d '{\"keyword\": \"potato\"}' http://hermesproject.pythonanywhere.com/search\n\n        2. Get the sentiment of the trends:\n        curl -X GET -H \"{insert key here without \"}\"}\" http://hermesproject.pythonanywhere.com/trends\n\n        3. Get only the trends (without sentiment):\n        curl -X GET -H \"{insert key here without \"}\"}\" http://hermesproject.pythonanywhere.com/\n\n        The above changes add the option to specify the page on which you want to get trend sentiment. Simply replace `{insert key here without \"}\"}` with the correct key from the `config.yml` file and insert the desired page number in `?page=1` (for example, `?page=1` for the first page, `?page=2` for the second page, and so on).\n\n        To clear the cache, you can use the following command:\n        curl -X POST http://hermesproject.pythonanywhere.com/clear_cache\n\n        Please remember to follow the applicable policies and terms of use when using the API.\n\n        Legal Disclaimer\n\n        Project Hermes was developed exclusively for academic purposes and to enhance the resume of the developer Alex Lira. Web scraping initially used to collect tweets was replaced by a database of 1,600,000 tweets. The link to the database is: https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download. The other datasets used in training the algorithm were obtained from sources that were not properly credited. The datasets will be available in the GitHub link: https://github.com/Mentorzx/Hermes.\n\n        Developer Alex Lira is not responsible for any misuse or rights violations resulting from the use of Project Hermes. The user is solely responsible for ensuring that their use complies with the applicable policies and terms of use.\n\n        Contact\n\n        For more information about Project Hermes or to contact developer Alex Lira, you can access his profile on GitHub.\n\n        Website developed by Jéssica Andrade and João Paulo Rios (Front-End Team) and Alex Lira (Back-end).\n        ",
    "results": [
      "Coney Island",
      "Happy 4",
      "Fort Worth",
      "Revolutionary War",
      "Wordle 745 X",
      "",
      "England",
      "Sonic Prime",
      "Camp David",
      "Mustard",
      "Steve Rogers",
      "Frederick Douglass",
      "National Anthem",
      "UNITED KINGDOM",
      "King George",
      "Insurrection Day",
      "Stars and Stripes Vol.",
      "Fireworks",
      "Declaration of Independence",
      "God Bless the USA"
    ]
  }

  return { props: { rawAbout: data.description } };
}

export default function About({ rawAbout }: AboutPageProps) {
  const about = formatAboutText(rawAbout);

  return (
    <>
      <Layout>
        <div className={`pt-6 text-4xl font-bold`}>
          {about.title}
        </div>

        <div className={`p-14`}>
          <div className={``}>
            {about.description.map((text, index) => <><p key={index}>{text}</p><br /></>)}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Features</h1><br />
            {about.features.map((text, index) => <><p key={index}>{text}</p><br /></>)}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Usage</h1><br />
            {about.usage.map((text, index) => <><p key={index}>{text}</p><br /></>)}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Legal Disclaimer</h1><br />
            {about.legalDisclaimer.map((text, index) => <><p key={index}>{text}</p><br /></>)}
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Contact</h1><br />
            {about.contact.map((text, index) => <><p key={index}>{text}</p><br /></>)}
          </div>
        </div>
      </Layout>
    </>
  );
}
