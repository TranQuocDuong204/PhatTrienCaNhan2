import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  users = [
    {
      id: 1,
      name: 'Nguyễn Phi Long',
      position: 'Trưởng Nhóm',
      imgUser: '../../assets/img/nguyenphilong.png',
      desciption:
        'Lên ý tưởng thực hiện cho dự án	Các thành viên cùng nhau đưa ra ý tưởng, nhóm trưởng sẽ tổng hợp và triển khai ra kế hoạch',
    },
    {
      id: 2,
      name: 'Nguyễn Văn Tuấn Phúc',
      position: 'Thành Viên',
      imgUser: '../../assets/img/phuc.jpg',
      desciption:
        'Xác định đối tượng người dùng và nội dung chính	Phân tích và xác định các nhóm mục tiêu, tạo nội dung phù hợp, chuẩn bị bài viết với nội dung hấp dẫn, hình ảnh.',
    },
    {
      id: 3,
      name: 'Phan Gia Bảo',
      position: 'Thành Viên',
      imgUser: '../../assets/img/phangiabao.jpg',
      desciption:
        'Thu thập dự liệu và thông tin	Chụp ảnh các địa điểm được đưa ra và tìm trên internet.',
    },

    {
      id: 4,
      name: 'Trần Quốc Dương',
      position: 'Thành Viên',
      imgUser: '../../assets/img/tranquocduong.jpg',
      desciption:
        'Thiết kế giao diện người dùng	Tạo giao diện trang web hấp dẫn, dễ sử dụng, trãi ngiệm người dùng mượt mà và thuận tiện.',
    },
  ];
}
