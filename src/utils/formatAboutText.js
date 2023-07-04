const formatAboutText = (rawText) => {

  const sections = [
    "description",
    "features",
    "usage",
    "legalDisclaimer",
    "contact",
  ];

  let about = {
    title: '',
    description: [],
    features: [],
    usage: [],
    legalDisclaimer: [],
    contact: [],
  };

  let text = rawText
    .split("\n")
    .filter((line) => line.trim().length != 0);

  let sectionIndex = 0;

  about.title = text[0].trim();

  for (let line of text.slice(2)) {
    line = line.trim();

    if (
      line == "Description" ||
      line == "Features" ||
      line == "Usage" ||
      line == "Legal Disclaimer" ||
      line == "Contact"
    ) {
      sectionIndex += 1;
    } else {
      try {
        about[sections[sectionIndex]].push(line);
      } catch (e) {}
    }
  }

  return about;
};

export default formatAboutText;
