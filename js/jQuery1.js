
$(() => {
  $(".sss").find("tr:eq(2)").addClass("ssccolor");
  $(".sss").find("tr:eq(3)").after("<tr><td>TR追加</td></tr>");
});

