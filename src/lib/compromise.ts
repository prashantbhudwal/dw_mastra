import nlp from "compromise";
import { article } from "./article";

const runCompromise = async function () {
  const doc = nlp(article);
  const verbs = doc.verbs();
  const nouns = doc.nouns();
  const adjectives = doc.adjectives();
  const adverbs = doc.adverbs();
  const sentences = doc.sentences().out("json");
  const pronouns = doc.pronouns();

  return {
    verbs,
    nouns,
    adjectives,
    adverbs,
    sentences,
    pronouns,
  };
};
