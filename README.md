**Làm quen với Git và Githup Các lệnh**

_…or create a new repository on the command_

> Tạo 1 kho lưu trữ mới trên dòng lệnh line

echo "# FunixJavaScript" >> README.md

> Tạo repository trong máy tính cá nhân nếu chưa có vs các bước

git init

> Initialized empty Git repository in máy tính cá nhân... (Dùng terminal cho dễ)

git status

> Để xem trạng thái các found(files) sẽ xuất hiện như sau:

> On branch master // Trên chi nhánh chủ
> Initial commit // Khởi tọa lời cam kết
> Untracked files(Các tệp chưa được kiểm tra): có 2 trạng thái

    1. Màu đỏ là chứa các tệp chưa được kiểm tra
    2. Màu xanh chứa các tệp đã được kiểm tra

git add

> Chuyển files tới StagingArea vs các lệnh ;

> git add index.htm or file bạn muốn chuyển tới StagingArea
> git add. (để thêm tất cả các file)

> Khi các files đã sẵn sàng commit thì tiếp tục bước dưới

git commit -m "first commit"

> -m là message với "nội dung" để biết xác nhận(cam kết) đã(để) làm gì? Local repository

git log

> Để kiểm tra đã commit hay chưa và thông tin chính xác

git remote add origin https://github.com/BillyPhan9x/FunixJavaScript.git

git push -u origin main

git branch -M main

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

... hoặc đẩy một kho lưu trữ hiện có từ dòng lệnh

git remote add origin https://github.com/BillyPhan9x/FunixJavaScript.git
git branch -M main
git push -u origin main
