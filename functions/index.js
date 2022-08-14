//https://firebase.google.com/docs/functions/get-started
const functions = require('firebase-functions');
const Filter = require('bad-words');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const filteredWords = ['turku'];

exports.detectFilteredWords = functions.firestore
  .document("messages/{msgId}")
  .onCreate(async (doc) => {
    const filter = new Filter({ emptyList: true });
    filter.addWords(...filteredWords);
    const { text, uid } = doc.data();

    if (filter.isProfane(text)) {
      const cleaned = filter.clean(text);
      await doc.ref.update({
        text: `🚫 BANNED for saying: ${cleaned}`,
      });

      await db.collection("banned").doc(uid).set({});
    }
  });

exports.detectRocket = functions.firestore
  .document("messages/{msgId}")
  .onCreate(async (doc) => {
    const { text } = doc.data();

    if (text === '🚀') {
      await doc.ref.update({
        text: `🚀 TO THE MOON!!!`,
      });
    }
  });