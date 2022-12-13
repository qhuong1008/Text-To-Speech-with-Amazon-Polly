# Xây dựng ứng dụng trên AWS. Tìm hiểu và ứng dụng Amazon Polly.

link file báo cáo: https://drive.google.com/file/d/1vuCdSmUCZHj_Tf66I2HgU7tdjrhWe7C1/view?usp=sharing

## Các nội dung chính

- Tìm hiểu hệ thống Cloud AWS và các dịch vụ hỗ trợ của AWS cho việc xây dựng trang web học tiếng anh online. Điển hình là AWS EC2
- Tìm hiểu về NodeJS và ReactJS Framwork để xây dựng một website
- Hoàn thiện một trang web học tiếng anh online có ứng dụng dịch vụ Amazon Polly.

## Công nghệ sử dụng

1. Amazon Polly

- Amazon Polly là một dịch vụ đám mây của Amazon Web Services, một công ty con của Amazon.com, giúp chuyển văn bản thành âm thanh nói. Nó cho phép các nhà phát triển tạo các ứng dụng và sản phẩm hỗ trợ giọng nói.
- Công cụ chuyển đổi văn bản thành giọng nói (Text-to-Speech) Amazon Polly): sử dụng công nghệ deep learning tiên tiến để tổng hợp thành lời nói tự nhiên của con người, với hàng chục giọng nói chân thực theo nhiều ngôn ngữ, người dùng có thể xây dựng ứng dụng có giọng nói hoạt động ở nhiều nước khác nhau.

2. Amazon EC2

* Amazon Elastic Compute Cloud (Amazon EC2) là một cơ sở hạ tầng điện toán đám mây được cung cấp bởi Amazon Web Services (AWS) giúp cung cấp tài nguyên máy tính ảo hoá theo yêu cầu.
* Amazon EC2 sẽ cung cấp một hoặc máy chủ ảo có thể kết hợp với nhau để dễ dàng triển khai ứng dụng nhanh nhất và đảm bảo tính sẵn sàng cao nhất. Thậm chí về mặt thanh toán bạn dễ dàng biết được các mức chi phí cần thanh toán dựa trên thông tin tài nguyên bạn sử dụng.

* Amazon EC2 Instanc là một cloud server. Với một tài khoản bạn có thể tạo và sử dụng nhiều Amazon EC2 Instance. Các Amazon EC2 Instance được chạy trên cùng một server vật lý và chia sẻ memory, CPU, ổ cứng...

3. NodeJS, ReactJS

## Chức năng chính

- Đăng nhập
- Đăng ký tài khoản mới
- Xem, tìm hiểu các khoá học hiện có trên trang web
- Đăng ký khoá học tiếng anh mới
- Xem các khoá học mà mình đã đăng kí
- Học từ mới theo topic:học đầy đủ (nghĩa, phát âm, giải thích)
- Ôn tập từ theo topic với 2 hình thức: ôn tập thông thường (chỉ có nghĩa, phát âm) và ôn tập listening (chỉ có phát âm)
- Người dùng có thể tạo khoá học topic trong hệ thống.

## Thành viên tham gia Project

- Phạm Quỳnh Hương - 20110141
- Nguyễn Thị Bích Liên - 20110335
- Phạm Quang Huy - 20110653

## Các bước cài đặt

backend: https://github.com/qhuong1008/backend-Text-To-Speech-with-Amazon-Polly.git

### Deploy web sử dụng EC2

B1: sử dụng ec2 tạo instance

B2: Connect Instance vừa tạo để lấy thông tin connect vào máy chủ ubuntu: ssh -i "cloudtest.pem" ubuntu@ec2-44-211-123-65.compute-1.amazonaws.com

- Vào terminal

ssh -i "cloudtest.pem" ubuntu@ec2-44-211-123-65.compute-1.amazonaws.com

cd Downloads
sudo apt-get update

- cài nodejs bản mới
  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt install wget
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
  source ~/.profile
  nvm install 16

- git backend về
  git clone https://github.com/qhuong1008/backend-Text-To-Speech-with-Amazon-Polly.git
- Vào connect-db chạy
  node api.js
- Thay đổi đường dẫn backend trong fronend
  http://ec2-54-224-108-224.compute-1.amazonaws.com:8090 backend trong frontend api/type/index.js
- Thay đổi đường dẫn trong dịch vụ aws polly trong AWSPolly.js
  aws_access_key_id, aws_secret_access_key, aws_session_token
- buil, push code frontend và git clone về
  Build: npm run build
  Nén file build cho vào folder deploy
  Push lên git
  git clone frontend https://github.com/qhuong1008/Text-To-Speech-with-Amazon-Polly.git
- Cd vào memozone, cd deploy: cài đặt unzip: sudo apt-get install unzip
  unzip build
- Deploy frontend:
  npm install -g serve
  serve -s  build -p 8080
