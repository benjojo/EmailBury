function BuryOldEmail() {
  var BuryTag = "<insert label here>";
  var ONE_WEEK = 60 * 60 * 24 * 7 * 1000; // Time Constants
  var ONE_DAY = 60 * 60 * 24 * 1000; // Time Constants
  var now = new Date();
  var expire = new Date(new Date() - (ONE_WEEK + ONE_DAY)); // I'm sure there is a better way of doing this.
  var threads = GmailApp.search("after:"+expire.getFullYear()+"/"+(expire.getMonth()+1)+"/"+expire.getDate()+" before:"+now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" label:"+BuryTag);
  for (var i = 0; i < threads.length; i++) {
    if(((new Date) - threads[i].getLastMessageDate()) > ONE_WEEK) {
      threads[i].moveToArchive();
      // Maybe also attach a new label to the message to signify that it has been buried
    }
  }
}
