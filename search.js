//<script>
  // lấy thẻ input
  var input = document.getElementById("myInput");
  // định nghĩa hàm xử lý myFunction
  function myFunction() {
      var filter, div , a;
      // lấy giá trị người dùng nhập
      filter = input.value.toUpperCase();
      div = document.getElementById("xe");
      div = a.getElementsByTagName("AUDI");
      // Nếu filter không có giá trị thị ẩn phần kết quare\
      if (!filter) {
        div.style.display = "Không có kết quả";
      }else{
        // lặp qua tất cả các thẻ li chứa kết quả
        for (i = 0; i < a.length; i++) {
            // lấy thẻ a trong các thẻ li
            a = div[i].getElementsByTagName("a")[0];
            // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              //nếu có hiển thị phàn tử ul và các thẻ li đó
                div.style.display = "block";
                div[i].style.display = "";
            } else {
              // nếu không ẩn các thẻ li
                div[i].style.display = "none";
 
            }
        }
      }
  }
  //gán sự kiện cho thẻ input
  input.addEventListener("keyup", myFunction);

    