const prayerMeetings = document.querySelectorAll(".prayerMeeting");

prayerMeetings.forEach(function (prayerMeeting) {
  prayerMeeting.addEventListener("click", function () {
    if (!prayerMeeting.classList.contains("fullscreen")) {
      prayerMeetings.forEach(function (meeting) {
        meeting.classList.remove("fullscreen");
      });
      prayerMeeting.classList.add("fullscreen");
    } else {
      prayerMeeting.classList.remove("fullscreen");
    }
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".prayerMeeting")) {
    prayerMeetings.forEach(function (meeting) {
      meeting.classList.remove("fullscreen");
    });
  }
});

const downloadLink = document.querySelectorAll(".downloadLink");
downloadLink.forEach(function (downloadLink) {
  downloadLink.addEventListener("click", function () {
    alert("已下載");
  });
})