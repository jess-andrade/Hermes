import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={`pt-6 text-4xl font-bold`}>Project Hermes</div>
        <div className={`p-14`}>
          <div className={``}>
            <p>
              Project Hermes is an algorithm that uses machine learning
              techniques to classify figures of speech in tweets. Currently, the
              algorithm uses Support Vector Machine (SVM) for this
              classification. Another SVM will be added soon to classify the
              words present in the figures of speech.
            </p>
            <br />
            <p>
              The algorithm no longer uses web scraping to collect tweets.
              Initially, web scraping was used, but due to conflicts with API
              hosting, a database with 1,600,000 tweets was used instead. The
              link to the database is:{" "}
              <a href="https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download">
                https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download
              </a>
              . However, the other datasets used to train the algorithm were
              obtained from sources that were not properly credited. We
              apologize for this lack of credits, but the datasets will be
              available in the GitHub link:{" "}
              <a href="https://github.com/Mentorzx/Hermes">
                https://github.com/Mentorzx/Hermes
              </a>
              .
            </p>
            <br />
            <p>
              The algorithm analyzes the collected tweets and classifies the
              figures of speech found in them. The goal is to identify and
              evaluate the opinions of Twitter users about certain subjects,
              using natural language processing and machine learning techniques.
            </p>
            <br />
          </div>
          <div className={`pt-6`}>
            <h1 className={`text-lg font-bold`}>Metrics:</h1>
            <br />

            <p>- Accuracy: 73.06%</p>
            <br />
            <p>- F1 Score: 64.97%</p>
            <br />
            <p>- Precision: 67.13%</p>
            <br />
            <p>- Recall: 73.06%</p>
            <br />
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Features</h1>
            <br />

            <p>Project Hermes has the following features:</p>
            <br />

            <p>
              - <b>Tweet collection</b>: The algorithm uses a database with
              1,600,000 tweets to perform the analysis of figures of speech. The
              tweets are pre-classified into figures of speech, such as
              figurative, ironic, regular, and sarcastic.
            </p>
            <br />
            <p>
              - <b>Classification of figures of speech</b>: The algorithm uses
              Support Vector Machine (SVM) to classify the figures of speech
              present in the tweets.
            </p>
            <br />
            <p>
              - <b>Sentiment classification</b>: The algorithm uses Support
              Vector Machine (SVM) to classify whether the searched keywords
              have a negative or positive sentiment according to the found
              tweets.\n\n
            </p>
            <br />

            <p>
              - <b>Keyword insertion</b>: It is possible to search for your own
              keyword, analyze its sentiment, and retrieve the tweets with their
              respective figures of speech.
            </p>
            <br />
            <p>
              - <b>Retrieving current Brazilian trends</b>: Obtain the current
              trends in Brazil.
            </p>
            <br />
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Usage</h1>
            <br />
            <p>To use Project Hermes, follow the steps below:</p>
            <br />

            <p>
              1. Set up the environment: Make sure you have the necessary
              dependencies installed in your development environment. Refer to
              the `requirements.txt` file for a complete list of dependencies
              and their corresponding versions.
            </p>
            <br />

            <p>
              2. Configuration of the <i>config.yml</i> file: The
              <i> config.yml</i> file contains the algorithm&apos;s
              configurations, such as Twitter access credentials and other
              relevant settings. Fill in all the necessary information correctly
              before running the algorithm.
            </p>
            <br />

            <p>
              3. Running the algorithm: Run the <i>main.py</i> file to start the
              API for the analysis of figures of speech in tweets. The algorithm
              will use the database of 1,600,000 tweets to perform the
              classification.
            </p>
            <br />
          </div>
          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Using the API</h1>
            <br />
            <p>
              The Project Hermes API allows you to make queries and obtain
              results through HTTP requests. Below are examples of how to use
              the API with cURL:
            </p>
            <br />

            <p>
              {`1. Search for a keyword: curl -X POST -H \"Content-Type: application/json\" -H \"X-API-Key: {insert key here without} -d '{\"keyword\": \"potato\"}' http://hermesproject.pythonanywhere.com/search`}
            </p>
            <br />

            <p>
              {`2. Get the sentiment of the trends**:\ncurl -X GET -H \"X-API-Key: {insert key here}" http://hermesproject.pythonanywhere.com/trends`}
            </p>
            <br />

            <p>
              {`3. **Get only the trends**:\ncurl -X GET -H \"X-API-Key: {insert key here} http://hermesproject.pythonanywhere.com/`}
            </p>
            <br />

            <p>{`The above changes add the option to specify the page on which you want to get trend sentiment. Simply replace {insert key here} with the correct key from the config.yml file and insert the desired page number in ?page=1 (for example, ?page=1 for the first page, ?page=2 for the second page, and so on).`}</p>
            <br />

            <p>
              To clear the cache, you can use the following command: curl -X
              POST http://hermesproject.pythonanywhere.com/clear_cache
            </p>
            <br />

            <p>
              Please remember to follow the applicable policies and terms of use
              when using the API.
            </p>
            <br />
          </div>

          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Used Libraries</h1>
            <br />

            <p>
              spellchecker; collections; langdetect; sklearn; pandas; zipfile;
              logging; nltk; io; os; logging.handlers; flask; threading;
              functools; typing; snscrape.modules.twitter; math; yaml
            </p>
            <br />
          </div>

          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Legal Disclaimer</h1>
            <br />

            <p>
              Project Hermes was developed exclusively for academic purposes and
              to enhance the resume of the developer Alex Lira. Web scraping
              initially used to collect tweets was replaced by a database of
              1,600,000 tweets. The link to the database is:{" "}
              <a href="https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download">
                https://www.kaggle.com/datasets/kazanova/sentiment140?resource=download
              </a>
              . The other datasets used in training the algorithm were obtained
              from sources and here is not properly credited. The datasets will
              be available in the GitHub link:{" "}
              <a href="https://github.com/Mentorzx/Hermes">
                https://github.com/Mentorzx/Hermes
              </a>
              .
            </p>
            <br />

            <p>
              Developer Alex Lira is not responsible for any misuse or rights
              violations resulting from the use of Project Hermes. The user is
              solely responsible for ensuring that their use complies with the
              applicable policies and terms of use.
            </p>
            <br />
          </div>

          <div className={`pt-10`}>
            <h1 className={`text-2xl font-bold`}>Contact</h1>
            <br />
            <p>
              For more information about Project Hermes or to contact developer
              Alex Lira, you can access his profile on GitHub.
            </p>
            <br />
            <p>
              Website developed by Jéssica Andrade and João Paulo Rios
              (Front-End Team) and Alex Lira (Back-end).
            </p>
            <br />
          </div>
        </div>
      </Layout>
    </>
  );
}
