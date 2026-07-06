$(document).ready(function () {
  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active-filter");
    $(this).addClass("active-filter");

    const filter = $(this).data("filter");
    $(".news-card").each(function () {
      if (filter === "all" || $(this).data("category") === filter) {
        $(this).fadeIn(300);
      } else {
        $(this).fadeOut(300);
      }
    });
  });


  let likeCount = 0;
  $("#likeBtn").click(function () {
    likeCount++;
    $("#likeCount").text(likeCount);
    $(this).text("👍 Đã thích (" + likeCount + ")");
  });
  $("#commentForm").submit(function (e) {
    e.preventDefault();
    const name = $("#cname").val().trim();
    const email = $("#cemail").val().trim();
    const content = $("#ccontent").val().trim();
    const topic = $("#ctopic").val();

    if (!name || !email || !content || !topic) {
      $("#formMsg").css("color", "#e91e8c").text("⚠ Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const newComment = `
      <div class="comment-item" style="display:none">
        <p class="comment-author">👤 ${name}</p>
        <p class="comment-topic">Chủ đề: ${topic}</p>
        <p class="comment-text">${content}</p>
      </div>
    `;
    $("#commentList").append(newComment);
    $(".comment-item:last").fadeIn(400);

    $("#formMsg").css("color", "#16a34a").text("✅ Gửi phản hồi thành công!");
    this.reset();
  });

  $("#loginForm").submit(function (e) {
    e.preventDefault();
    const user = $("#username").val().trim();
    const pass = $("#password").val().trim();

    if (!user || !pass) {
      $("#loginMsg").css("color", "#e91e8c").text("⚠ Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (user === "admin" && pass === "123456") {
      $("#loginMsg").css("color", "#16a34a").text("✅ Đăng nhập thành công! Chào " + user);
    } else {
      $("#loginMsg").css("color", "#e91e8c").text("❌ Sai tên đăng nhập hoặc mật khẩu.");
    }
  });

});
