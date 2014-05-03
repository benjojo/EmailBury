function BuryOldEmail() {
  var BuryTag = "<insert label here>";
  var ONE_WEEK = 60 * 60 * 24 * 7 * 1000;
  var threads = GmailApp.search("label:"+BuryTag);
  for (var i = 0; i < threads.length; i++) {

    if(((new Date) - threads[i].getLastMessageDate()) > ONE_WEEK) {
      threads[i].moveToArchive();
    }

  }
}
