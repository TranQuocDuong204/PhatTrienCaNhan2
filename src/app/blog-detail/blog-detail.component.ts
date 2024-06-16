import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  public blogsId: number = 0;
  oneItem: any = {};
  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
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
        'Công viên Biển Đông, tọa lạc tại thành phố Đà Nẵng, là một điểm đến hấp dẫn cho cả người dân địa phương và du khách. Công viên này nằm dọc bờ biển Mỹ Khê, một trong những bãi biển đẹp nhất Việt Nam, với bãi cát trắng mịn và nước biển trong xanh.',
      imageURLs: [
        {
          img: 'https://statics.vinpearl.com/cong-vien-bien-dong-04_1632656332.jpg',
          content:
            'Không chỉ gây ấn tượng với khung cảnh những chú bồ câu chao lượn tự do giữa bầu trời xanh, công viên còn nổi bật với tượng Mẹ Âu Cơ nằm ngay giữa trung tâm. Bức tượng được điêu khắc tỉ mỉ, lột tả hình ảnh Mẹ Âu Cơ và bọc trăm trứng trong truyền thuyết, thể hiện tình thần tự hào dân tộc và lòng tôn kính sâu sắc của người dân Đà Nẵng nói riêng cũng như con người Việt Nam nói chung đối với những người mẹ vĩ đại.',
        },
        {
          img: 'https://static.vinwonders.com/2022/06/ZwIlGdJ2-cong-vien-bien-dong-1.jpg',
          content:
            'Không gian mở và thoáng đãng: Công viên có không gian rộng rãi, thoáng đãng, lý tưởng cho các hoạt động dã ngoại, đi dạo hay chạy bộ. Bãi biển dài và rộng tạo thuận lợi cho các hoạt động thể thao và vui chơi trên cát.',
        },
        {
          img: 'https://danangbest.com/upload_content/cong-vien-bien-dong-1.webp',
          content:
            'Ý nghĩa và vai trò của Công viên Biển Đông: Công viên Biển Đông không chỉ là một địa điểm du lịch nổi tiếng mà còn là nơi thể hiện nét văn hóa và đời sống của người dân Đà Nẵng. Đây là nơi mà mọi người có thể hòa mình vào thiên nhiên, tham gia các hoạt động của mình ngoài trời và tận hưởng không khí trong lành của biển cả. Công viên cũng góp phần nâng cao chất lượng cuộc sống, tạo nên một không gian xanh, sạch đẹp và hiện đại cho thành phố. Nếu bạn có cơ hội đến Đà Nẵng, đừng bỏ lỡ cơ hội ghé thăm Công viên Biển Đông để tận hưởng những trải nghiệm thú vị và khó quên tại nơi đây.',
        },
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
        'Là một cây cầu độc đáo tại Việt Nam, cầu Rồng trở thành một biểu tượng của thành phố Đà Nẵng mà không du khách nào có thể bỏ lỡ. Tuy nhiên ít ai hiểu về lịch sử của cầu Rồng Đà Nẵng. Vậy nên, bài viết hôm nay sẽ giúp bạn tìm hiểu về lịch sử của cây cầu này cùng một vài sự thật bất ngờ mà bạn chưa biết.',
      imageURLs: [
        {
          img: 'https://baogiaothong.mediacdn.vn/upload/3-2022/images/2022-07-25/2-1658733315-112-width740height515.jpg',
          content:
            'Đúng như tên gọi, cầu Rồng với hình dáng một con rồng có chiều dài 666m, rộng 37.5m bắc qua con sông Hàn. Với kinh phí gần 1.5 tỷ đồng, cây cầu có sáu làn xe và được thông xe lần đầu vào ngày 29 tháng Ba năm 2013 nhân dịp kỉ niệm 38 năm ngày giải phóng thành phố Đà Nẵng. Nếu như bạn không biết thì thiết kế của cầu Rồng gắn liền với những bước tiến trong lịch sử của nghệ thuật kiến trúc mới của thành phố Đà Nẵng. Đó là kết quả của một cuộc thi thiết kế giữa những kiến trúc sư có tên tuổi để tìm ra thiết kế đặc biệt nhất cho cây cầu. Hai kiến trúc sư đến từ Mỹ với thiết kế con rồng đang bay đã giành chiến thắng.',
        },
        {
          img: 'https://cdn.toponseek.com/sites/6/2022/08/cau-rong-da-nang-1-1.jpg',
          content:
            'Cầu Rồng là cây cầu có kiến trúc độc đáo nhất Việt Nam, là con đường ngắn nhất nối sân bay quốc tế Đà Nẵng với những đường trục chính trong thành phố. Không chỉ đóng vai trò là đường giao thông huyết mạch của thành phố, cầu Rồng, với kiến trúc mô phỏng con rồng thời Lý đang vươn mình bay ra biển, là một trong những kiến trúc mang tính biểu tượng của thành phố Đà Nẵng.',
        },
        {
          img: ' https://afamilycdn.com/k:thumb_w/600/UPEDEXSUNu5POxYuuEDpiDVSYpsK2/Image/2013/03/Ngam-cau-Rong-Da-Nang-lung-linh-ve-dem-(6)-2c23a/ngam-cau-rong-da-nang-lung-linh-mau-sac-ve-dem.jpg',
          content:
            'Đuôi rồng được cách điệu với hình dáng bông hoa sen đang nở, loài hoa truyền thống gắn liền với làng quê yên bình tại Việt Nam. Thân rồng uốn lượn vươn ra biển thể hiện khao khát hội nhập với bạn bè năm châu của Đà Nẵng. Về độ bền, cây cầu được phủ 5 lớp sơn chống ăn mòn và bảo vệ cây cầu khỏi ảnh hưởng của thời tiết cũng như đem đến màu vàng bắt mắt.',
        },
        {
          img: 'https://media.baodautu.vn/Images/giaminh/2018/02/10/cau-rong-5-e1505463926776.jpg',
          content:
            'Đối với khách du lịch Đà Nẵng, cùng với việc tìm hiểu lịch sử cầu Rồng Đà Nẵng, chiêm ngưỡng cầu Rồng phun lửa là một trong những giây phút thú vị nhất. Rất may mắn là bạn có thể chiêm ngưỡng màn biểu diễn tuyệt diệu này mỗi cuối tuần mà không mất chút phí nào. Đều đặn mỗi 9 giờ tối thứ Bảy và Chủ nhật, cầu Rồng sẽ chiêu đãi người dân và khách du lịch màn biểu diễn tuyệt vời của nước và lửa.Màn trình diễn đầu tiên là màn phun lửa với 2 lượt mỗi lượt 9 lần. Bạn sẽ bất ngờ với ánh sáng lung linh kết hợp cùng lửa phun ra từ đầu rồng. Rất nhiều du khách lại yêu thích màn trình diễn thứ hai, màn phun nước khá ngắn ngủi gồm có 3 lượt mỗi lượt chỉ 1 lần.',
        },
      ],
      image:
        'https://static.vinwonders.com/2022/06/rMPh6R3O-cong-vien-bien-dong-5.jpg',
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
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/09/bien-my-khe-18.jpg?tr=dpr-2,w-675',
          content:
            'Nằm cách trung tâm thành phố Đà Nẵng chỉ tầm 3km, bãi biển Mỹ Khê là một trong những điểm đến đốn tim các tín đồ đam mê “xê dịch”. Cụ thể, biển Mỹ Khê nằm trên cung đường Võ Nguyên Giáp, thuộc phường Phước Mỹ, quận Sơn Trà. Được mệnh danh là một trong những bãi biển quyến rũ nhất hành tinh, Mỹ Khê nhanh chóng trở thành điểm đến thu hút đông đảo khách du lịch trong và ngoài nước. Không những vậy, biển Mỹ Khê còn nhận được sự quan tâm đặc biệt của báo chí quốc tế bởi nét đẹp quyến rũ, non nước hữu tình. Bởi vậy, đến Đà Nẵng mà không ghé thăm Mỹ Khê thì thực sự là một sự bỏ lỡ đáng tiếc.',
        },
        {
          img: 'https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-05-1636298582.jpeg',
          content:
            'Mỹ Khê là bãi biển hội tụ đủ những yếu tố để phát triển các hoạt động ngoài trời. Với vị trí địa lí thuận lợi, du khách chỉ cần mất vài phút là có thể di chuyển từ trung tâm thành phố đến bãi biển xinh đẹp này. Đến du lịch biển Mỹ Khê, bạn có thể hoàn toàn yên tâm tham gia các hoạt động dưới nước như bơi lội, tắm biển. Tại một bãi biển mà du lịch đang nở rộ như Mỹ Khê, đội ngũ nhân viên bảo hộ thường xuyên túc trực để đảm bảo được sự an toàn cho quá trình vui chơi của du khách.',
        },
        {
          img: 'https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-06-1636298582.jpeg',
          content:
            'Không chỉ hấp dẫn du khách bởi làn nước trong xanh, bãi cát êm đềm hay những bóng dừa rợp mát, Mỹ Khê còn được đánh giá là một trong những bãi biển sạch nhất Việt Nam. Bên cạnh đó, nơi đây còn tập trung hàng loạt khách sạn cao cấp và biệt thự sang trọng nhằm phục vụ tốt nhất cho nhu cầu nghỉ ngơi của du khách khi du lịch đà nẵng. Vẻ đẹp mê hoặc của biển Mỹ Khê và sự thân thiện, mến khách của con người Đà Nẵng đã giúp cho địa điểm này ghi được nhiều điểm cộng lớn và trở nên vô cùng ấn tượng trong mắt của du khách. Do đó, nơi đây gần như quanh năm đều đông đúc.',
        },
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
        'Bà Nà Hill, một địa điểm du lịch Đà Nẵng nổi tiếng không thể bỏ qua khi ghé thăm thành phố biển xinh đẹp này. Cái tên Bà Nà Hill được xuất phát từ người Pháp, khi đặt chân đến nơi đây thấy có nhiều cây chuối nên đặt tên là Banane sau này người Việt đọc chệch thành Bà Nà do đó có tên gọi là Bà Nà Hill cho đến bây giờ. ',
      imageURLs: [
        {
          img: 'https://vnpay.vn/s1/statics.vnpay.vn/2023/11/0idnltvm0p2m1698943217828.png',
          content:
            'Với độ cao lên tới hơn 1.400 mét so với mực nước biển, do đó nhiệt độ tại Bà Nà Hill thường khá mát mẻ vào mùa hè từ 15-25 độ C, và khá lạnh vào mùa đông với nhiệt độ dưới 10 độ C. Nơi đây quang năm có sương mù và mây bao phủ, chính điều đó đã mang đến cho du khách cơ hội trải nghiệm khí hậu trong lành và khung cảnh tuyệt đẹp hòa quyện với đất trời. Đối với những du khách đang tìm kiếm sự kết hợp giữa cảnh sắc thiên nhiên và trải nghiệm du lịch độc đáo, Bà Nà Hill chính là điểm đến không thể bỏ qua khi ghé thăm Đà Nẵng.',
        },
        {
          img: 'https://duan-sungroup.com/wp-content/uploads/2022/10/khu-vuon-co-tich-giua-long-da-nang-e1665823875574.png',
          content:
            'Làng Pháp tại Bà Nà Hill, là một điểm du lịch độc đáo và hấp dẫn được xây dựng với lối kiến trúc như bản sao của một ngôi làng Pháp cổ điển. Với sự nguy nga tráng lệ đậm chất Châu Âu sẽ đem đến cho du khách một trải nghiệm không khác gì đang đi du lịch tại nước Pháp vậy. Đây không chỉ là một điểm du lịch, mà còn là một không gian lý tưởng để chụp hình, ghi lại những khoảnh khắc đẹp nhất trong hành trình khám phá. Ngoài ra, du khách cũng có thể thưởng thức ẩm thực Pháp tại các nhà hàng sang trọng hoặc thăm những cửa hàng bán đồ lưu niệm và đồ thủ công.',
        },
        {
          img: 'https://media.vneconomy.vn/images/upload/2022/02/25/sun-world-ba-na-hills-10.jpg',
          content:
            "Cầu Vàng khi mới ra mắt đã thu hút sự tò mò của hầu hết khách du dịch trong và ngoài nước đến để khám phá, xuất hiện trên nhiều bài viết của các trang báo du lịch nổi tiếng và được vinh danh vào 'Top 10 cây cầu có kiến trúc độc đáo và đẹp nhất thế giới'. Từ cây cầu bạn có thể phóng tầm mắt bao trọn cả một không gian rộng lớn nhìn ngắn cảnh núi rừng hùng vĩ và sự mênh mông của đất trời. Đây chắc chắn sẽ là một trải nghiệm không thể quên trong chuyến thăm của bạn tại Đà Nẵng.",
        },
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
        'Đỉnh Bàn Cờ là một điểm dừng chân quen thuộc đối với bất kỳ du khách nào đặt chân đến bán đảo Sơn Trà, Đà Nẵng. Nổi tiếng với những nét đẹp hoài cổ hiếm có giữa nhịp sống đô thị hối hả, hiện nay đỉnh núi đã trở thành một điểm đến thu hút được rất nhiều khách du lịch tham quan mỗi ngày.',
      imageURLs: [
        {
          img: 'https://static.vinwonders.com/2022/06/dinh-Ban-Co-1-1.jpg',
          content:
            'Đỉnh núi Bàn Cờ Là một điểm du lịch vô cùng nổi tiếng với những du khách yêu thích vẻ đẹp kỳ vĩ tự nhiên, đỉnh Bàn Cờ tọa lạc tại phường Thọ Quang, quận Sơn Trà, thành phố Đà Nẵng. Đi về hướng Tây Bắc một quãng đường chừng 9 km tính từ trung tâm thành phố, nơi đây được thiên nhiên ưu ái ban tặng một vẻ đẹp vô cùng thơ mộng, huyền bí với núi rừng bạt ngàn, hòa với khung cảnh mênh mông sóng biển. Với độ cao 700m so với mực nước biển và là nơi cao nhất trong toàn bộ khu vực thành phố, núi Bàn Cờ được người dân trìu mến gọi bằng cái tên rất đỗi thân thương “nóc nhà của Đà Nẵng”. Từ trên đỉnh núi, du khách sẽ có cơ hội chiêm ngưỡng trọn vẹn thành phố Đà Nẵng lung linh dưới một góc nhìn hoàn toàn mới mẻ. Đây cũng là địa điểm lý tưởng để bạn có thể tận hưởng bầu không khí trong lành, tươi mới của đất trời.',
        },
        {
          img: 'https://static.vinwonders.com/2022/06/dinh-Ban-Co-5-1.jpg',
          content:
            'Bên cạnh những khung cảnh kỳ ảo, mê hoặc lòng người, nơi đây cũng lưu truyền một sự tích vô cùng độc đáo và thú vị về đỉnh Bàn Cờ. Ngày xưa, có một vị tiên ông giáng trần và ngao du đến vùng đất bán đảo Sơn Trà. Vì quá thích thú trước cảnh sắc nơi đây, trong lúc nghỉ ngơi, ông đã hóa phép ra một bàn cờ rồi tự mình ngẫm nghĩ. Đế Thích – một vị tiên chơi cờ rất hay, vô tình đi ngang qua nên đã lập tức xin vào thỉnh giáo.',
        },
        {
          img: 'https://images2.thanhnien.vn/528068263637045248/2024/3/7/son-tra-2-17097773110161814308448.jpg',
          content:
            'Dù đã chơi nhiều ngày liền, cả hai vị tiên ông đều ngang tài ngang sức, bất phân thắng bại. Ngày kia, bỗng xuất hiện nhiều vị tiên nữ xinh đẹp hạ phàm tại một bãi biển gần đảo Sơn Trà, sau này được gọi là bãi Tiên Sa. Đế Thích bị xao nhãng bởi những tiếng vui đùa của tiên nữ, ông đã đi sai một nước và cuối cùng phải chịu thua. Sau khi thắng trận, tiên ông vui vẻ bay về trời, chỉ còn Đế Thích thẫn thờ nán lại để tìm ra cách hóa giải thế cục ván cờ, nhưng dù có làm cách nào thì vẫn không có kết quả. Vì thế, người dân nơi đây dựng nên một bàn cờ đá cùng với tượng tiên ông Đế Thích đang ngồi suy ngẫm. Cùng từ đó, tên gọi đỉnh Bàn Cờ được ra đời và dần trở nên phổ biến với tất cả mọi người.',
        },
        {
          img: 'https://static.vinwonders.com/2022/06/dinh-Ban-Co-9.jpg',
          content:
            'Có thể nói rằng, Sơn Trà đẹp nhất là vào những buổi sớm tinh sương. Bình minh trên đỉnh núi Bàn Cờ đẹp hệt như một bức tranh thủy mặc với những tia nắng lung linh dần xuyên qua màn sương mờ huyền ảo. Những gam màu ấm áp và khung cảnh đẹp tuyệt vời khi mặt trời từ từ ló dạng chắc chắn sẽ ghi sâu vào trong tâm trí của du khách những ấn tượng vô cùng sâu sắc, khó phai. Với vị trí tự nhiên thuận lợi, đỉnh núi này cũng được rất nhiều du khách lựa chọn làm địa điểm để ngắm nhìn khung hoàng hôn buông xuống tại bán đảo Sơn Trà. Lúc chiều tà, bầu trời Đà Nẵng đỏ rực những tia nắng cuối ngày. Đây là cơ hội tuyệt vời để chiêm ngưỡng hình ảnh một Đà Nẵng hữu tình, nên thơ, với những đoàn thuyền đánh cá ở bãi Tiên Sa hay cây cầu Rồng uốn mình nổi bật, mạnh mẽ.',
        },
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
        'Cầu sông Hàn được ví là biểu tượng của thành phố biển bởi công trình đã đánh dấu sự chuyển mình của Đà thành cũng như thể hiện cho sức sống mới, sự trẻ trung, năng động, khát vọng đi lên. Địa danh này hoàn thành nhờ sự đóng góp của đông đảo người dân nơi đây.',
      imageURLs: [
        {
          img: 'https://image.baohatinh.vn/w1000/Uploaded/2024/zdxltqjwq/2024_03_13/cau-song-han-1-459.jpg',
          content:
            'Cầu sông Hàn là một trong những cây cầu bắc qua sông Hàn ở Đà Nẵng, miền Trung Việt Nam. Công trình này do kỹ sư, công nhân nước ta tự lên ý tưởng và thi công. Thiết kế cầu quay sông Hàn được làm bằng bê tông cốt thép rất chắc chắn. ',
        },
        {
          img: 'https://cdn3.ivivu.com/2022/09/cau-song-han-da-nang-ivivu-1.jpg',
          content:
            'Ngắm nhìn cầu sông Hàn vào ban đêm, du khách sẽ được chiêm ngưỡng ánh đèn lấp lánh. Hình ảnh này nhanh chóng phản chiếu xuống mặt nước càng tạo ra khung cảnh lung linh. Đặc biệt, trên trời cao có những ánh sao sáng hòa quyện mang lại những trải nghiệm khó quên.',
        },
        {
          img: 'https://static.vinwonders.com/2022/03/cau-song-han.jpg',
          content:
            'Cầu sông Hàn được khởi công vào ngày 2/9/1998, khánh thành vào 29/3/2000. Cầu có chiều dài 487,7 mét, rộng 12,9 mét, bao gồm 11 nhịp, mỗi nhịp dài 33 mét. Đồng thời, các dự ứng lực và 2 nhịp dây văng có tổng chiều dài 122,7 mét. Cầu sông Hàn quay nhằm mục đích phục vụ cho giao thông đường thủy. Hoạt động này tạo điều kiện thuận lợi cho các tàu thuyền qua lại. Sở dĩ, cầu quay là do phần trục chính có thể di chuyển được góc 90 độ.',
        },
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
        'Quốc lộ 1A là tuyến đường bộ dài nhất và xuyên suốt Việt Nam. Đi qua không biết bao địa danh, vùng miền trù phú và tươi đẹp của đất nước, nhưng có lẽ kỳ vĩ và ấn tượng nhất vẫn là đoạn đường đèo Hải Vân. Không chỉ gây ấn tượng mạnh về cảnh sắc thiên nhiên hùng vĩ, nơi đây còn mang đậm dấu ấn trong chiều dài lịch sử của đất nước.',
      imageURLs: [
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/06/deo-hai-van-4.jpg?tr=dpr-2,w-675',
          content:
            'Hải Vân còn có tên gọi khác là là đèo Ải Vân (vì trên đỉnh có cửa ải Hải vân Quan) hay đèo Mây (vì đỉnh đèo nhiều mây che phủ). Đèo nằm ở độ cao 500m so với mực nước biển và kéo dài 20km, cắt ngang dãy núi Bạch Mã. Đây được coi là ranh giới giữa tỉnh Thừa Thiên - Huế (ở phía Bắc) và TP Đà Nẵng (ở phía Nam). Đèo Hải Vân được đánh giá là 1 trong 10 đường ven biển đẹp nhất thế giới và là cung đường đèo ven biển đẹp nhất Việt Nam.',
        },
        {
          img: 'https://danang-shopping.com/wp-content/uploads/2017/05/dia-diem-du-lich-da-nang-deo-hai-van-2.jpg',
          content:
            'Cảm giác khiến du khách thích thú khi đến đây chính là cảm giác chinh phục. Suốt 20km của cung đường đèo ven biển đẹp nhất Việt Nam này là những khúc cua chữ U đủ khiến cho bạn “đứng tim”. Nhưng vượt qua được cảm giác sợ hãi, bạn sẽ được trả lại kết quả hoàn toàn xứng đáng. Cảnh thiên nhiên hùng vĩ, ngoạn mục và không kém phần thơ mộng bày ra trước mắt bạn sẽ một bữa tiệc thị giác thật sự mà không ai muốn bỏ lỡ.',
        },
        {
          img: 'https://hn.ss.bfcplatform.vn/tckt/2022/12/22A12017-4.jpg',
          content:
            'Cung đường đèo nổi bật giữa bạt ngàn núi non hùng vĩ với một bên là núi cao, một bên là rừng xanh. Cảnh tượng thiên nhiên quả thực xứng danh “Thiên hạ đệ nhất hùng quan”. Từ trên đỉnh đèo, phượt thủ sẽ thấy toàn cảnh Vịnh Lăng Cô, TP Đà Nẵng, Cù lao Chàm, cảng Tiên Sa, bán đảo Sơn Trà… hiện lên như một bức tranh tuyệt sắc.',
        },
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
        'Cầu tình yêu tuy không có kiến trúc độc đáo hay là ý nghĩa lịch sử nào, nhưng lại có một sức hút khó cưỡng, đặc biệt là với cặp đôi. Mỗi khi đi du lịch Đà Nẵng, cây cầu luôn là địa điểm check-in không thể bỏ. ',
      imageURLs: [
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/08/cau-tinh-yeu-da-nang-2.jpg?tr=dpr-2,w-675',
          content:
            'Cầu tình yêu Đà Nẵng nằm ở ngay trung tâm thành phố, ở phía đông sông Hàn, tọa lạc trên đường Trần Hưng Đạo, quận Sơn Trà, Đà Nẵng. Cầu tình yêu được ra mắt vào năm 2015 và nằm giữa cầu Trần Thị Lý và cầu Rồng. Chính vì thế, khi đứng trên cầu tình yêu bạn có thể ngắm nhìn thành phố theo một góc nhìn mộng mơ.',
        },
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/08/cau-tinh-yeu-da-nang-3.jpg?tr=dpr-2,w-675',
          content:
            'Cầu Tình Yêu được thiết kế với hình dáng uốn lượn mềm mại, lấy cảm hứng từ những cây cầu tình yêu nổi tiếng trên thế giới như Pont des Arts ở Paris. Cầu được trang trí bằng hàng nghìn chiếc đèn lồng đỏ, mang ý nghĩa về sự may mắn và tình yêu bền vững. Vào buổi tối, khi những chiếc đèn lồng được thắp sáng, cầu trở nên lung linh, tạo nên không gian lãng mạn tuyệt vời.',
        },
        {
          img: 'https://duthuyendanang.com/wp-content/uploads/2021/09/cau-tinh-yeu-da-nang-1024x659.jpg',
          content:
            'Một trong những điểm nhấn đặc biệt của Cầu Tình Yêu Đà Nẵng là truyền thống khóa tình yêu. Các cặp đôi thường đến đây để treo những chiếc khóa tình yêu khắc tên hoặc những thông điệp ý nghĩa, rồi ném chìa khóa xuống sông Hàn như một lời hứa về tình yêu vĩnh cửu. Hàng nghìn chiếc khóa đã được treo lên, tạo nên một khung cảnh đầy màu sắc và lãng mạn.',
        },
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
        'Nếu là tín đồ của biển cả, chắc chắn bạn sẽ không muốn bỏ qua Rạn Nam Ô - nơi được mệnh danh là thiên đường của đá. Với vẻ đẹp hoang sơ đến cuốn hút, nơi đây đã miêu tả một cách chân chất nhất về nhịp sống bình dị của người dân làng chài ở vùng biển Đà Nẵng và mang đến trải nghiệm du lịch đáng có nhất trong đời.',
      imageURLs: [
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/03/ran-nam-o-1.jpg?tr=dpr-2,w-675',
          content:
            'Rạn Nam Ô là một bãi rạn bình yên nằm trong làng biển cổ Nam Ô, thuộc phường Hòa Hiệp Nam, quận Liên Chiểu, TP. Đà Nẵng. Nơi đây có diện tích rộng khoảng 2ha, bao gồm Rạn Cả và Rạn Con. Nếu như Rạn Con mang vẻ đẹp hiền hòa, thì Rạn Cả lại sở hữu những tảng đá gai góc hơn, trải dài trên khoảng 300m và rộng 50m. Ngoài vẻ đẹp hùng vĩ của thiên nhiên, Rạn Nam Ô còn có một truyền thuyết thú vị về sự tích hình thành những phiến đá độc đáo. Tương truyền kể từ thời xa xưa, có một đôi vợ chồng được Ngọc Hoàng trao trọng trách đào biển, lấp núi thế nhưng trong quá trình di chuyển những tảng đá ấy họ đã ngã xuống. Tại nơi đó, Rạn Nam Ô được hình thành và tồn tại cho đến ngày nay.',
        },
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/03/ran-nam-o-5.jpg?tr=dpr-2,w-675',
          content:
            'Không giống những bãi biển khác, Nam Ô mang trong mình vẻ đẹp hoang sơ của biển cả và tạo hóa. Những phiến đá gai góc phủ đầy rêu xanh như đang bồng bềnh trên mặt nước đã tạo nên một bức tranh khung cảnh tuyệt đẹp. Những ai đến đây cũng sẽ đều say đắm và bất ngờ trước sự kỳ diệu của thiên nhiên.',
        },
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2023/03/ran-nam-o-3.jpg?tr=dpr-2,w-675',
          content:
            'Với khung cảnh hoang sơ, yên bình và hùng vĩ, Rạn Nam Ô mang đến cho bạn một không gian tuyệt vời để ngắm cảnh và thư giãn. Đặc biệt, trên bãi biển có những dải đá ngầm lồi lõm và những tảng đá lớn xếp chồng lên nhau, tạo nên cảnh đẹp ngỡ ngàng như một thiên đường. Vào tháng 1 âm lịch hàng năm, những tảng đá này được bao phủ bởi lớp rêu xanh độc đáo. Nếu bạn đứng trên những tảng đá lớn, bạn sẽ thấy đèo Hải Vân ở bờ biển phía Tây và bán đảo sơn trà ở hướng đối diện thật “oai nghiêm”.',
        },
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
        'Bán Đảo Sơn Trà, hay còn gọi là Núi Khỉ, là một trong những điểm du lịch không thể bỏ qua khi đến với Đà Nẵng. Nằm cách trung tâm thành phố khoảng 10 km về phía Đông Bắc, Sơn Trà nổi tiếng với vẻ đẹp hoang sơ, hệ sinh thái phong phú và những trải nghiệm du lịch độc đáo.',
      imageURLs: [
        {
          img: 'https://static.vinwonders.com/2022/12/Du-lich-ban-dao-Son-Tra-17.jpeg',
          content:
            'Bán Đảo Sơn Trà nằm ở độ cao 693 mét so với mực nước biển, kéo dài ra biển Đông và như một tấm chắn tự nhiên bảo vệ thành phố Đà Nẵng khỏi những cơn bão. Từ đây, du khách có thể ngắm toàn cảnh thành phố, bãi biển Mỹ Khê quyến rũ và cảng Tiên Sa nhộn nhịp.',
        },
        {
          img: 'https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2022/03/31/ban-dao-son-tra-31032022.jpg',
          content:
            'Sơn Trà là khu bảo tồn thiên nhiên với diện tích khoảng 4.439 ha, là nơi sinh sống của nhiều loài động thực vật quý hiếm. Đặc biệt, Sơn Trà là ngôi nhà của loài voọc chà vá chân nâu – loài linh trưởng quý hiếm chỉ có ở Việt Nam. Khám phá rừng Sơn Trà, du khách sẽ được chiêm ngưỡng nhiều loại cây cổ thụ, thảm thực vật đa dạng và hệ động vật phong phú.',
        },
        {
          img: 'https://ik.imagekit.io/tvlk/blog/2022/09/ban-dao-son-tra-3-1024x550.jpg?tr=dpr-2,w-675',
          content:
            'Ngôi chùa nổi tiếng với tượng Phật Bà Quan Âm cao 67 mét, một trong những biểu tượng của Đà Nẵng. Chùa Linh Ứng không chỉ là nơi hành hương mà còn là điểm ngắm cảnh lý tưởng với tầm nhìn ra biển Đông và thành phố.',
        },
      ],
      image:
        'https://statics.vinpearl.com/du-lich-ban-dao-Son-Tra-hinh-anh3%20(1).jpg',
      date: '26/05/2024',
    },
  ];
}
