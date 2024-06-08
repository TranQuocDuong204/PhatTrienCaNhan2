import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogs = [
    {
      id: 0,
      name: 'Công viên Biển Đông',
      address: 'Nằm cuối đường Phạm Văn Đồng, cạnh tượng đài Mẹ Âu Cơ',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Công viên Biển Đông, tọa lạc tại thành phố Đà Nẵng, là một điểm đến hấp dẫn cho cả người dân địa phương và du khách. Công viên này nằm dọc bờ biển Mỹ Khê, một trong những bãi biển đẹp nhất Việt Nam, với bãi cát trắng mịn và nước biển trong xanh.Các đặc điểm nổi bật của Công viên Biển Đông: 1. Khung cảnh thiên nhiên đẹp mắt: Công viên nằm ngay sát biển, mang đến tầm nhìn tuyệt đẹp ra đại dương xanh ngát. Vườn cây xanh mát và các khu vực hoa cảnh được chăm sóc tỉ mỉ, tạo nên không gian thư giãn lý tưởng. Tượng đài Chim bồ câu: Một điểm nhấn độc đáo của công viên là tượng đài Chim bồ câu, biểu tượng cho hòa bình. Các chú chim bồ câu thật cũng thường xuyên tụ tập tại khu vực này, tạo nên cảnh tượng sống động và ấn tượng. Hoạt động giải trí và sự kiện: Công viên là nơi tổ chức nhiều sự kiện văn hóa, nghệ thuật và giải trí, như các buổi biểu diễn âm nhạc, hội chợ, và các lễ hội địa phương. Khu vực vui chơi dành cho trẻ em và các hoạt động thể thao biển như lướt sóng, chèo thuyền kayak cũng được tổ chức thường xuyên. Tiện ích và dịch vụ: Các quán cà phê, nhà hàng và quầy bán đồ ăn nhẹ phục vụ nhu cầu ẩm thực của du khách. Hệ thống ghế ngồi, bàn picnic và khu vực tắm biển được trang bị đầy đủ, đảm bảo sự tiện lợi và thoải mái cho người tham quan. Không gian mở và thoáng đãng: Công viên có không gian rộng rãi, thoáng đãng, lý tưởng cho các hoạt động dã ngoại, đi dạo hay chạy bộ. Bãi biển dài và rộng tạo điều kiện thuận lợi cho các hoạt động thể thao và vui chơi trên cát. Ý nghĩa và vai trò của Công viên Biển Đông: Công viên Biển Đông không chỉ là một địa điểm du lịch nổi tiếng, mà còn là nơi thể hiện nét văn hóa và đời sống của người dân Đà Nẵng. Đây là nơi mà mọi người có thể hòa mình vào thiên nhiên, tham gia các hoạt động ngoài trời và tận hưởng không khí trong lành của biển cả. Công viên cũng góp phần nâng cao chất lượng cuộc sống, tạo nên một không gian xanh, sạch đẹp và hiện đại cho thành phố. Nếu bạn có dịp đến Đà Nẵng, đừng bỏ lỡ cơ hội ghé thăm Công viên Biển Đông để tận hưởng những trải nghiệm thú vị và khó quên tại nơi đây.',
      imageURLs: [
        'https://static.vinwonders.com/2022/06/CnqvAloo-cong-vien-bien-dong-6.jpg',
        'https://static.vinwonders.com/2022/06/ZwIlGdJ2-cong-vien-bien-dong-1.jpg',
        'https://danangbest.com/upload_content/cong-vien-bien-dong-1.webp',
      ],
      image:
        'https://static.vinwonders.com/2022/06/rMPh6R3O-cong-vien-bien-dong-5.jpg',
      date: '26/05/2024',
    },
    {
      id: 1,
      name: 'Cầu Rồng',
      address: 'P. An Hải Tây, Q. Sơn Trà, TP. Đà Nẵng',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Cầu Rồng là cây cầu thứ 6 và là cây cầu mới nhất bắc qua sông Hàn.[1] Vì cây cầu có hình dáng giống một con rồng nên được gọi là Cầu Rồng. Cầu Rồng dài 666 m và rộng 37,5 m với 6 làn xe chạy. Cầu được khởi công xây dựng vào ngày 19/7/2009 và chính thức thông xe ngày 29 tháng 3 năm 2013, kinh phí xây cầu gần 1,5 nghìn tỷ đồng (US$88m). Cầu được thiết kế bởi Ammann & Whitney Consulting Engineers với tập đoàn Louis Berger. Việc xây dựng được thực hiện bởi Tổng công ty xây dựng công trình giao thông .Cây cầu hiện đại này bắc qua sông Hàn tại bùng binh (cũ) Lê Đình Dương/Bạch Đằng, tạo con đường ngắn nhất từ sân bay quốc tế Đà Nẵng tới các đường chính trong thành phố Đà Nẵng, và một tuyến đường trực tiếp đến bãi biển Mỹ Khê và bãi biển Non Nước ở rìa phía đông của thành phố. Cầu được thiết kế và xây dựng với hình dạng của một con rồng có khả năng phun lửa và phun nước. Hiện tại, thời gian phun lửa và phun nước bắt đầu vào lúc 21 giờ các ngày thứ sáu, thứ bảy, Chủ nhật hàng tuần và các ngày lễ lớn. Cầu Rồng là cây cầu có kiến trúc độc đáo nhất Việt Nam, là con đường ngắn nhất nối sân bay quốc tế Đà Nẵng với những đường trục chính trong thành phố. Không chỉ đóng vai trò là đường giao thông huyết mạch của thành phố, cầu Rồng, với kiến trúc mô phỏng con rồng thời Lý đang vươn mình bay ra biển, là một trong những kiến trúc mang tính biểu tượng của thành phố Đà Nẵng. Đuôi rồng được cách điệu với hình dáng bông hoa sen đang nở, loài hoa truyền thống gắn liền với làng quê yên bình tại Việt Nam. Thân rồng uốn lượn vươn ra biển thể hiện khao khát hội nhập với bạn bè năm châu của Đà Nẵng. Về độ bền, cây cầu được phủ 5 lớp sơn chống ăn mòn và bảo vệ cây cầu khỏi ảnh hưởng của thời tiết cũng như đem đến màu vàng bắt mắt.',
      imageURLs: [
        'https://baogiaothong.mediacdn.vn/upload/3-2022/images/2022-07-25/2-1658733315-112-width740height515.jpg',
        'https://cdn.toponseek.com/sites/6/2022/08/cau-rong-da-nang-1-1.jpg',
        'https://media.baodautu.vn/Images/giaminh/2018/02/10/cau-rong-5-e1505463926776.jpg',
      ],
      image:
        'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cau-Rong-dep-tuyet-voi.jpg',
      date: '26/05/2024',
    },
    {
      id: 2,
      name: 'Bãi Biển Mỹ Khê',
      address: 'Đường Võ Nguyên Giáp, T20, thuộc phường Phước Mỹ, quận Sơn ',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Bãi biển Mỹ Khê nằm tại thành phố Đà Nẵng, là một trong những bãi biển đẹp và nổi tiếng nhất của Việt Nam. Được tạp chí Forbes bình chọn là một trong sáu bãi biển quyến rũ nhất hành tinh, Mỹ Khê thu hút đông đảo du khách trong và ngoài nước nhờ vẻ đẹp tự nhiên và các hoạt động phong phú.',
      imageURLs: [
        'https://ik.imagekit.io/tvlk/blog/2023/09/bien-my-khe-18.jpg?tr=dpr-2,w-675',
        'https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-05-1636298582.jpeg',
        'https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-06-1636298582.jpeg',
      ],
      image:
        'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1655807661/blog/ikyu4js1ylxaqwsbkufh.jpg',
      date: '26/05/2024',
    },
    {
      id: 3,
      name: 'Bà Nà Hills',
      address: 'Hòa Phú, Hòa Van, Đà Nẵng',
      time: '8:00 - 17:00',
      price: 'Người lớn: 650.000 VNĐ/ người Trẻ em: 550.000 VNĐ/ người',
      description:
        'Bà Nà Hill, một địa điểm du lịch Đà Nẵng nổi tiếng không thể bỏ qua khi ghé thăm thành phố biển xinh đẹp này. Cái tên Bà Nà Hill được xuất phát từ người Pháp, khi đặt chân đến nơi đây thấy có nhiều cây chuối nên đặt tên là Banane sau này người Việt đọc chệch thành Bà Nà do đó có tên gọi là Bà Nà Hill cho đến bây giờ. Với độ cao lên tới hơn 1.400 mét so với mực nước biển, do đó nhiệt độ tại Bà Nà Hill thường khá mát mẻ vào mùa hè từ 15-25 độ C, và khá lạnh vào mùa đông với nhiệt độ dưới 10 độ C. Nơi đây quang năm có sương mù và mây bao phủ, chính điều đó đã mang đến cho du khách cơ hội trải nghiệm khí hậu trong lành và khung cảnh tuyệt đẹp hòa quyện với đất trời. Đối với những du khách đang tìm kiếm sự kết hợp giữa cảnh sắc thiên nhiên và trải nghiệm du lịch độc đáo, Bà Nà Hill chính là điểm đến không thể bỏ qua khi ghé thăm Đà Nẵng. Cây cầu Vàng nằm giữa không gian hùng vĩ của Bà Nà Hill, cao 1.414 mét so với mặt nước biển. Được thiết kế vô cùng độc đáo với độ dài gần 150 mét như một sợi chỉ vàng chạy xuyên qua đôi bàn tay khổng lồ vươn ra từ đỉnh núi, du khách sẽ phải ngỡ ngàng trước vẻ đẹp và sự kỳ vĩ mà cây cầu đem lại.',
      imageURLs: [
        'https://media.vneconomy.vn/images/upload/2022/02/25/sun-world-ba-na-hills-10.jpg',
        'https://duan-sungroup.com/wp-content/uploads/2022/10/khu-vuon-co-tich-giua-long-da-nang-e1665823875574.png',
        'https://vnpay.vn/s1/statics.vnpay.vn/2023/11/0idnltvm0p2m1698943217828.png',
      ],
      image:
        'https://duan-sungroup.com/wp-content/uploads/2022/10/xu-so-than-tien-cua-viet-nam.png',
      date: '26/05/2024',
    },
    {
      id: 4,
      name: 'Đỉnh Bàn Cờ',
      address: 'Bán đảo Sơn Trà, Thọ Quang, quận Sơn Trà, Đà Nẵng',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Đỉnh Bàn Cờ là một điểm dừng chân quen thuộc đối với bất kỳ du khách nào đặt chân đến bán đảo Sơn Trà, Đà Nẵng. Nổi tiếng với những nét đẹp hoài cổ hiếm có giữa nhịp sống đô thị hối hả, hiện nay đỉnh núi đã trở thành một điểm đến thu hút được rất nhiều khách du lịch tham quan mỗi ngày. Đỉnh núi Bàn Cờ Là một điểm du lịch vô cùng nổi tiếng với những du khách yêu thích vẻ đẹp kỳ vĩ tự nhiên, đỉnh Bàn Cờ tọa lạc tại phường Thọ Quang, quận Sơn Trà, thành phố Đà Nẵng. Đi về hướng Tây Bắc một quãng đường chừng 9 km tính từ trung tâm thành phố, nơi đây được thiên nhiên ưu ái ban tặng một vẻ đẹp vô cùng thơ mộng, huyền bí với núi rừng bạt ngàn, hòa với khung cảnh mênh mông sóng biển. Với độ cao 700m so với mực nước biển và là nơi cao nhất trong toàn bộ khu vực thành phố, núi Bàn Cờ được người dân trìu mến gọi bằng cái tên rất đỗi thân thương “nóc nhà của Đà Nẵng”. Từ trên đỉnh núi, du khách sẽ có cơ hội chiêm ngưỡng trọn vẹn thành phố Đà Nẵng lung linh dưới một góc nhìn hoàn toàn mới mẻ. Đây cũng là địa điểm lý tưởng để bạn có thể tận hưởng bầu không khí trong lành, tươi mới của đất trời. Truyền thuyết độc đáo về đỉnh Bàn Cờ. Bên cạnh những khung cảnh kỳ ảo, mê hoặc lòng người, nơi đây cũng lưu truyền một sự tích vô cùng độc đáo và thú vị về đỉnh Bàn Cờ. Ngày xưa, có một vị tiên ông giáng trần và ngao du đến vùng đất bán đảo Sơn Trà. Vì quá thích thú trước cảnh sắc nơi đây, trong lúc nghỉ ngơi, ông đã hóa phép ra một bàn cờ rồi tự mình ngẫm nghĩ. Đế Thích – một vị tiên chơi cờ rất hay, vô tình đi ngang qua nên đã lập tức xin vào thỉnh giáo. Dù đã chơi nhiều ngày liền, cả hai vị tiên ông đều ngang tài ngang sức, bất phân thắng bại. Ngày kia, bỗng xuất hiện nhiều vị tiên nữ xinh đẹp hạ phàm tại một bãi biển gần đảo Sơn Trà, sau này được gọi là bãi Tiên Sa. Đế Thích bị xao nhãng bởi những tiếng vui đùa của tiên nữ, ông đã đi sai một nước và cuối cùng phải chịu thua.',
      imageURLs: [
        'https://static.vinwonders.com/2022/06/dinh-Ban-Co-1-1.jpg',
        'https://static.vinwonders.com/2022/06/dinh-Ban-Co-5-1.jpg',
        'https://static.vinwonders.com/2022/06/dinh-Ban-Co-9.jpg',
      ],
      image:
        'https://ik.imagekit.io/tvlk/blog/2022/12/dinh-ban-co-2.jpg?tr=dpr-2,w-675',
      date: '26/05/2024',
    },
    {
      id: 5,
      name: 'Cầu Sông Hàn',
      address: 'An Hải Bắc, Sơn Trà, Đà Nẵng',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Cầu sông Hàn được ví là biểu tượng của thành phố biển bởi công trình đã đánh dấu sự chuyển mình của Đà thành cũng như thể hiện cho sức sống mới, sự trẻ trung, năng động, khát vọng đi lên. Địa danh này hoàn thành nhờ sự đóng góp của đông đảo người dân nơi đây. 1. Cầu sông Hàn ở đâu? Đôi nét về cầu quay sông Hàn. Cầu sông Hàn là một trong những cây cầu bắc qua sông Hàn ở Đà Nẵng, miền Trung Việt Nam. Công trình này do kỹ sư, công nhân nước ta tự lên ý tưởng và thi công. Thiết kế cầu quay sông Hàn được làm bằng bê tông cốt thép rất chắc chắn. Ngắm nhìn cầu sông Hàn vào ban đêm, du khách sẽ được chiêm ngưỡng ánh đèn lấp lánh. Hình ảnh này nhanh chóng phản chiếu xuống mặt nước càng tạo ra khung cảnh lung linh. Đặc biệt, trên trời cao có những ánh sao sáng hòa quyện mang lại những trải nghiệm khó quên. 2. Khám phá thiết kế cầu quay sông Hàn: Cầu sông Hàn được khởi công vào ngày 2/9/1998, khánh thành vào 29/3/2000. Cầu có chiều dài 487,7 mét, rộng 12,9 mét, bao gồm 11 nhịp, mỗi nhịp dài 33 mét. Đồng thời, các dự ứng lực và 2 nhịp dây văng có tổng chiều dài 122,7 mét. Cầu sông Hàn quay nhằm mục đích phục vụ cho giao thông đường thủy. Hoạt động này tạo điều kiện thuận lợi cho các tàu thuyền qua lại. Sở dĩ, cầu quay là do phần trục chính có thể di chuyển được góc 90 độ. Cầu sông Hàn là một trong nhữngđịa điểm du lịch Đà Nẵng hấp dẫn bạn không nên bỏ qua. Nơi đây vừa mang vẻ đẹp hiện đại, vừa ghi dấu về ký ức nguyên sơ của người dân. Đặc biệt, du khách còn tìm thấy giây phút thư thái, thả hồn mình cảm nhận sự tươi mát, trong lành. 3. Cầu sông Hàn quay lúc nào? Chi tiết thời gian cầu quay: Qua nhiều năm, cầu quay sông Hàn đã được điều chỉnh giờ giấc hoạt động. Tuy vẫn quay vào buổi tối nhưng thời gian khác nhau cho từng ngày, cụ thể như sau: •	Thứ 2 đến thứ 6: Bắt đầu từ 0h45 phút, các hoạt động giao thông sẽ tạm ngưng. Tầm 1h sáng là thời gian cầu sông Hàn quay với nhịp giữa 90 độ để lộ ra 2 con đường cho tàu thủy qua lại. Tùy vào số lượng tàu ít hay nhiều, cầu sẽ quay lại vị trí ban đầu vào lúc 2h hoặc 4h sáng. •	Thứ 7 và chủ nhật: Vào thời điểm cuối tuần, nhu cầu du lịch Đà Nẵng nói chung và tham quan cầu sông Hàn nói riêng tăng đột biến. Vì thế, chính quyền địa phương đã đẩy giờ quay cầu sớm hơn mọi khi. Từ 22h45, toàn bộ phương tiện giao thông sẽ ngừng di chuyển, đúng 23h cây cầu bắt đầu di chuyển và sau khoảng 60 phút sẽ quay lại vị trí ban đầu. 4. Địa điểm ngắm cầu sông Hàn quay đẹp nhất: Có rất nhiều cách để bạn chiêm ngưỡng vẻ đẹp của cầu quay sông Hàn Đà Nẵng về đêm. Trong đó, thuê thuyền du ngoạn dọc sông Hàn sẽ là lựa chọn đáng cân nhắc dành cho bạn. Đồng thời, ghé thăm quán cà phê hoặc tòa nhà cao tầng cũng mang lại cho bạn tầm nhìn trọn vẹn nhất.',
      imageURLs: [
        'https://image.baohatinh.vn/w1000/Uploaded/2024/zdxltqjwq/2024_03_13/cau-song-han-1-459.jpg',
        'https://cdn3.ivivu.com/2022/09/cau-song-han-da-nang-ivivu-1.jpg',
        'https://static.vinwonders.com/2022/03/cau-song-han.jpg',
      ],
      image: 'https://statics.vinpearl.com/cau-song-han-1_1629260599.jpg',
      date: '26/05/2024',
    },
  ];

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
