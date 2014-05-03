function BuryOldEmail() {
  var BuryTag = "<insert label here>";
  var ONE_WEEK = 60 * 60 * 24 * 7 * 1000;
  var ONE_DAY = 60 * 60 * 24 * 1000;
  var now = new Date();
  var expire = new Date(new Date() - (ONE_WEEK + ONE_DAY));
  var threads = GmailApp.search("after:"+expire.getFullYear()+"/"+(expire.getMonth()+1)+"/"+expire.getDate()+" before:"+now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" label:"+BuryTag);
  for (var i = 0; i < threads.length; i++) {

    if(((new Date) - threads[i].getLastMessageDate()) > ONE_WEEK) {
      threads[i].moveToArchive();
    }

  }
}
