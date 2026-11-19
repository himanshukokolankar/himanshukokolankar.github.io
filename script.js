// Himanshu Kolankar — Portfolio: menu, copy-email, year. No tracking, no libraries.
(function () {
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = 'Menu';
      }
    });
  }

  var copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = 'official.himanshukolankar30@gmail.com';
      var done = function () {
        copyBtn.textContent = 'Copied';
        setTimeout(function () { copyBtn.textContent = 'Copy email'; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        done();
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Featured build demo: step through the n8n workflow.
  var demoSteps = document.querySelectorAll('.demo-step');
  var demoLine = document.getElementById('demoLine');
  var demoSheet = document.getElementById('demoSheet');
  var stepText = [
    'The call ends. The voice agent has the caller\u2019s details \u2014 name, interest, timing.',
    'A webhook sends those details straight to n8n \u2014 no manual copying.',
    'The n8n AI agent reads the details and decides: qualified, delaying, or not interested.',
    'Qualified leads land in Google Sheets automatically. Delaying leads go to a follow-up Sheet; not-interested contacts are dropped.'
  ];
  if (demoSteps.length && demoLine) {
    demoSteps.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-step'), 10);
        demoSteps.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        demoLine.textContent = stepText[i];
        if (demoSheet) demoSheet.hidden = (i !== 3);
      });
    });
  }
})();
