import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  public blogsId: number = 0;
  oneItem: any = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let data;
    let id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.blogsId = id;

    this.oneItem = this.blogs.find((item) => item.id === this.blogsId);
  }

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
        {img: 'https://static.vinwonders.com/2022/06/CnqvAloo-cong-vien-bien-dong-6.jpg', content: ""},
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
    {
      id: 6,
      name: 'Đèo Hải Vân',
      address: 'Nằm giữa tỉnh Thừa Thiên Huế và thành phố Đà Nẵng',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Quốc lộ 1A là tuyến đường bộ dài nhất và xuyên suốt Việt Nam. Đi qua không biết bao địa danh, vùng miền trù phú và tươi đẹp của đất nước, nhưng có lẽ kỳ vĩ và ấn tượng nhất vẫn là đoạn đường đèo Hải Vân. Không chỉ gây ấn tượng mạnh về cảnh sắc thiên nhiên hùng vĩ, nơi đây còn mang đậm dấu ấn trong chiều dài lịch sử của đất nước. Hải Vân còn có tên gọi khác là là đèo Ải Vân (vì trên đỉnh có cửa ải Hải vân Quan) hay đèo Mây (vì đỉnh đèo nhiều mây che phủ). Đèo nằm ở độ cao 500m so với mực nước biển và kéo dài 20km, cắt ngang dãy núi Bạch Mã. Đây được coi là ranh giới giữa tỉnh Thừa Thiên - Huế (ở phía Bắc) và TP Đà Nẵng (ở phía Nam). Đèo Hải Vân được đánh giá là 1 trong 10 đường ven biển đẹp nhất thế giới và là cung đường đèo ven biển đẹp nhất Việt Nam.',
      imageURLs: [
        'https://ik.imagekit.io/tvlk/blog/2023/06/deo-hai-van-4.jpg?tr=dpr-2,w-675',
        'https://danang-shopping.com/wp-content/uploads/2017/05/dia-diem-du-lich-da-nang-deo-hai-van-2.jpg',
        'https://hn.ss.bfcplatform.vn/tckt/2022/12/22A12017-4.jpg',
      ],
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/06/deo-hai-van-2.jpg?tr=dpr-2,w-675',
      date: '26/05/2024',
    },
    {
      id: 7,
      name: 'Cầu tình yêu đà nẵng',
      address: 'Đ.Trần Hưng Đạo, An Hải, Sơn Trà, Đà Nẵng ',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Cầu tình yêu tuy không có kiến trúc độc đáo hay là ý nghĩa lịch sử nào, nhưng lại có một sức hút khó cưỡng, đặc biệt là với cặp đôi. Mỗi khi đi du lịch Đà Nẵng, cây cầu luôn là địa điểm check-in không thể bỏ. Cầu tình yêu Đà Nẵng nằm ở ngay trung tâm thành phố, ở phía đông sông Hàn, tọa lạc trên đường Trần Hưng Đạo, quận Sơn Trà, Đà Nẵng. Cầu tình yêu được ra mắt vào năm 2015 và nằm giữa cầu Trần Thị Lý và cầu Rồng. Chính vì thế, khi đứng trên cầu tình yêu bạn có thể ngắm nhìn thành phố theo một góc nhìn mộng mơ.',
      imageURLs: [
        'https://ik.imagekit.io/tvlk/blog/2023/03/ran-nam-o-5.jpg?tr=dpr-2,w-675',
        'https://cdn3.ivivu.com/2022/09/r%E1%BA%A1n-nam-%C3%B4-ivivu-3.jpg',
        'https://duthuyendanang.com/wp-content/uploads/2021/09/cau-tinh-yeu-da-nang-1024x659.jpg',
      ],
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/08/cau-tinh-yeu-da-nang-2.jpg?tr=dpr-2,w-675',
      date: '26/05/2024',
    },
    {
      id: 8,
      name: 'Rạn Nam Ô',
      address: 'Phường Hòa Hiệp Nam, quận Liên Chiểu, TP. Đà Nẵng.',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Nếu là tín đồ của biển cả, chắc chắn bạn sẽ không muốn bỏ qua Rạn Nam Ô - nơi được mệnh danh là thiên đường của đá. Với vẻ đẹp hoang sơ đến cuốn hút, nơi đây đã miêu tả một cách chân chất nhất về nhịp sống bình dị của người dân làng chài ở vùng biển Đà Nẵng và mang đến trải nghiệm du lịch đáng có nhất trong đời. Rạn Nam Ô là một bãi rạn bình yên nằm trong làng biển cổ Nam Ô, thuộc phường Hòa Hiệp Nam, quận Liên Chiểu, TP. Đà Nẵng. Nơi đây có diện tích rộng khoảng 2ha, bao gồm Rạn Cả và Rạn Con. Nếu như Rạn Con mang vẻ đẹp hiền hòa, thì Rạn Cả lại sở hữu những tảng đá gai góc hơn, trải dài trên khoảng 300m và rộng 50m. Ngoài vẻ đẹp hùng vĩ của thiên nhiên, Rạn Nam Ô còn có một truyền thuyết thú vị về sự tích hình thành những phiến đá độc đáo. Tương truyền kể từ thời xa xưa, có một đôi vợ chồng được Ngọc Hoàng trao trọng trách đào biển, lấp núi thế nhưng trong quá trình di chuyển những tảng đá ấy họ đã ngã xuống. Tại nơi đó, Rạn Nam Ô được hình thành và tồn tại cho đến ngày nay.',
      imageURLs: [
        'https://ik.imagekit.io/tvlk/blog/2023/09/bien-my-khe-18.jpg?tr=dpr-2,w-675',
        'https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-05-1636298582.jpeg',
        'https://cdn.justfly.vn/400x300/media/202401/22/1705916576-justfly-ran-nam-o-da-nang33.jpg',
      ],
      image:
        'https://ik.imagekit.io/tvlk/blog/2023/03/ran-nam-o-1.jpg?tr=dpr-2,w-675',
      date: '26/05/2024',
    },
    {
      id: 9,
      name: 'Bán đảo Sơn Trà',
      address: 'Phường Thọ Quang, quận Sơn Trà, Tp. Đà Nẵng',
      time: 'Cả ngày',
      price: 'Miễn phí',
      description:
        'Bán đảo Sơn Trà thuộc phường Thọ Quang, quận Sơn Trà, Tp. Đà Nẵng. Xưa kia, đây là đảo nổi được hợp thành bởi 3 ngọn núi. Theo thời gian, nước biển mang phù sa bồi đắp tạo thành 1 dải đất nối liền đảo và đất liền và hình thành bán đảo Sơn Trà. Nơi đây có 3 mặt giáp biển, 1 mặt giáp đô thị và chỉ cách trung tâm thành phố khoảng 10km. Nếu bạn lựa chọn bán đảo Sơn Trà làm điểm đến cho chuyến du lịch Đà Nẵng, thì thời điểm thích hợp nhất để du lịch tại đây chính là giai đoạn từ cuối xuân đến mùa thu, nghĩa là vào khoảng từ tháng 3 tới tháng 9. Đây là lúc phù hợp để du lịch Sơn Trà vì ở thời điểm này, thời tiết của Đà Nẵng cực kì đẹp với ít mưa, không có quá nhiều sương mù cản trở tầm nhìn của bạn. Bên cạnh đó, thời điểm này là thời điểm ít xảy ra các hiện tượng thiên nhiên ngoài mong muốn như bão, lũ,... Hải Đăng Sơn Trà: Ngọn hải đăng này nằm ở độ cao 223m so với mực nước biển. Ngọn hải đăng này được Pháp xây dựng từ những năm 1950. Đến nay, hải đăng Sơn Trà được đánh giá là một trong những hải đăng cổ và đẹp nhất của nước ta. Đây là địa điểm lý tưởng để chiêm ngưỡng toàn cảnh biển trời bao la và là nơi ra đời biết bao bức ảnh “để đời” của du khách. Ghềnh bàng: Ghềnh Bàng là một địa điểm tuyệt đẹp nhưng không nhiều du khách biết đến. Lý do là đường đến với Ghềnh Bàng không dễ dàng như đến những địa điểm khác. Du khách sẽ phải gửi xe máy để chinh phục đoạn đường rừng nhiều dốc và cây cối um tùm khoảng 1km. Nhưng phần thưởng dành cho du khách là khung cảnh hoang sơ, kỳ vĩ đến khó tin của biển trời, của sóng trắng, của những khối đá lớn nhỏ với hình thù và màu sắc khác nhau.',
      imageURLs: [
        'https://ik.imagekit.io/tvlk/blog/2022/09/ban-dao-son-tra-3-1024x550.jpg?tr=dpr-2,w-675',
        'https://mlbjxymshcai.i.optimole.com/cb:aoPt~32a91/w:auto/h:auto/q:mauto/https://chamdiscovery.com/wp-content/uploads/2022/11/F7902764-189C-4416-AE98-C31018710090.png',
        'https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2022/03/31/ban-dao-son-tra-31032022.jpg',
      ],
      image:
        'https://statics.vinpearl.com/du-lich-ban-dao-Son-Tra-hinh-anh3%20(1).jpg',
      date: '26/05/2024',
    },
  ];
}
