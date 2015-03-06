$(function() {
  'use strict';

  function ContactFormViewModel() {
    var self = this;
    self.name = ko.observable();
    self.email = ko.observable();
    self.message = ko.observable();

    self.submit = function() {
      $.ajax({
        url: 'https://docs.google.com/forms/d/1sQjXasjAs7WDMLBX0sKzsGGtnB7yncBufSHHmgcRu3E/formResponse',
        data: {'entry_886735557': self.name(), 'entry_85346771': self.email(), 'entry_105022985': self.message() },
        type: 'POST',
        statusCode: {
          0: function() {
            toastr.success('Your Message has been submitted!');
          },
          200: function() {
            toastr.success('Your Message has been submitted!');
          }
        }
      });
    };
  }

  var vm = new ContactFormViewModel();

  ko.applyBindings(vm);
});
