$("#add-coder").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let firstName = $("#first-name").val().trim();
    let lastName = $("#last-name").val().trim();
    let userName = $("#username").val().trim();
    let framework = $("#framework").val().trim();
    let language = $("#language").val().trim();


    var info = {
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      frameworks: framework,
      languages: language

    };

    // Send the POST request.
    $.ajax("/api/add", {
      method: "POST",
      data: info
    }).then(
      function() {
        console.log("created new coder");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
  $("#update-coder").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let firstName = $("#first-name").val().trim();
    let lastName = $("#last-name").val().trim();
    let framework = $("#framework").val().trim();
    let language = $("#language").val().trim();
    let id = $(this).val();

    var updatedInfo = {
        first_name: firstName,
        last_name: lastName,
        frameworks: framework,
        language: language
    };


    // Send the PUT request.
    $.ajax("/api/edit/" + id, {
      method: "POST",
      data: updatedInfo
    }).then(
      function() {
        console.log("updated info");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });