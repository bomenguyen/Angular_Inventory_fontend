import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  danhsach_sanpham: any[] =
    [
      {
        "id": 1,
        "title": "Canon Powershot G7 X Mark III",
        "price": 18000000, "quantitys": 50,
        "description": "Kích thước: 104.1 x 60.9 x 40.6 mm. Trọng lượng: 303 g",
        "category": "canon",
        "image": "https://binhminhdigital.com/storedata/images/product/canon-g7x-mark-iii(1).jpg"
      },
      {
        "id": 2,
        "title": "Canon Powershot G7 X Mark/BẠC",
        "price": 0, "quantitys": 100,
        "description": "Kích thước màn hình: LCD 3.Tích hợp Wi-Fi, Bluetooth.Pin: 1250 mAh (NB-13L).Kích thước: 104.1 x 60.9 x 40.6 mm.Trọng lượng: 303 g",
        "category": "canon",
        "image": "https://binhminhdigital.com/storedata/images/product/may-anh-canon-powershot-g7-x-mark-iii-bac-hang-nhap-khau.jpg"
      },
      {
        "id": 3,
        "title": "Canon EOS 5D Mark IV",
        "price": 56000000, "quantitys": 250,
        "description": "Phụ kiện đi kèm: Eyecup, Pin LP-E6N, sạc LC-E6, dây đeo cổ EOS 5D Mark IV, dây AV, dây USB, hướng dẫn sử dụng",
        "category": "canon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/canon-eos-5d-mark-iv-body.jpg"
      },
      {
        "id": 4,
        "title": "Canon EOS 6D Mark II kit EF 24-105MM F3.5-5.6 IS STM",
        "price": 42190000, "quantitys": 20,
        "description": "Cảm biến CMOS Full frame 20.2MP. Bộ xử lý hình ảnh DIGIC 5+. Màn hình LCD 3.0' 1.04m-Dot. Quay phim Full HD 1080p 30fps",
        "category": "canon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/canon-eos-6d-mark-ii-kit-ef-24105mm-f3556-is-stm-den.jpg"
      },
      {
        "id": 5,
        "title": "Ống Kính Canon EF 35mm F1.4L II USM",
        "price": 45500000, "quantitys": 5,
        "description": "Ngàm EF dòng ống kính L-Series. Khẩu độ F/1.4-22. Cấu tạo quang học: 14 thấu kính gom thành 11 nhóm. Thấu kính phi cầu. Khoảng cách lấy nét gần nhất 30cm",
        "category": "canon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/ong-kinh-canon-ef-35mm-f14-l-ii-usm.jpg"
      },
      {
        "id": 6,
        "title": "Fujifilm X-T4 KIT XF18-55MM",
        "price": 45900000, "quantitys": 10,
        "description": "Quay phim DCI/UHD 4K60, Full HD 240 fps. ISO160-12800 (mở rộng 80-51200). 18 chế độ giả lập phim. Tích hợp Wi-Fi, Bluetooth. Ống kính kit XF 18-55mm f/2.8-4 R LM OIS",
        "category": "fujifilm",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-fujifilm-x-t4-kit-xf18-55mm.jpg"
      },
      {
        "id": 7,
        "title": "Máy Ảnh Fujifilm GFX 100",
        "price": 224990000, "quantitys": 200,
        "description": "Video 4K30 DCI; F-Log Gamma & xuất 10 bit. Ổn định hình ảnh sensor-shift 5 trục. AF nhận diện pha 2.16 triệu điểm. ISO 100-12800. Chụp liên tiếp đến 5 fps. Tích hợp báng pin. 2 khe cắm thẻ nhớ SD",
        "category": "fujifilm",
        "image": "https://binhminhdigital.com/StoreData/images/Product/May-anh-Fujifilm-GFX-100-Binhminhdigital.jpg"
      },
      {
        "id": 8,
        "title": "Fujifilm X-T200 Kit 15-45MM",
        "price": 18900000, "quantitys": 60,
        "description": "Cảm biến APS-C CMOS 24.2MP. Quay video UHD 4K và Full HD. EVF OLED 2.36 triệu điểm. Màn hình cảm ứng 3.5' 2.76 triệu điểm, xoay lật. Ổn định hình ảnh mới. Chế độ phim HDR mới. USB-C, mini stereo jack 3.5mm. Ống kính kit Fujifilm XC 15-45mm f/3.5-5.6 OIS PZ",
        "category": "fujifilm",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-fujifilm-xt200-kit-15-45mm-xam-than.jpg"
      },
      {
        "id": 9,
        "title": "Máy Ảnh Chụp In Liền Lomography Diana Instant Square Deluxe Kit Màu AdrianC",
        "price": 5900000, "quantitys": 150,
        "description": "Sử dụng giấy in ảnh Fujifilm instax Square. In ảnh kích thước 2.4 x 2.4. Ống kính tương đương 75mm (tương đương 38mm) f/11. Điều khiển khẩu độ thủ công, lấy nét vùng. Kính ngắm quang học có thể tháo rời. Gương selfie tích hợp trên thân máy. Thiết lập chụp bulb và đa phơi sáng. Đi kèm bộ gắn ống kính. Đi kèm adapter cho đèn flash ngoài",
        "category": "lamography",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-chup-in-lien-lomography-diana-instant-square-deluxe-kit-mau-adriano.jpg"
      },
      {
        "id": 10,
        "title": "Máy ảnh phim 35mm Lomography Lomo LC-A+",
        "price": 7000000, "quantitys": 80,
        "description": "Máy ảnh film 35mm. Ống kính Minitar-1 tiêu cự 32mm, f/2.8. Kính ngắm quang học trực tiếp. Hot shoe để gắn đèn flash. Tạo nhiều ảnh đa phơi sáng. Dây bấm để chụp phơi sáng dài. ISO 100-1600",
        "category": "lamography",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-phim-35mm-lomography-diana-lomo-lc-a.jpg"
      },
      {
        "id": 11,
        "title": "Máy ảnh chụp in liền Lomography Lomo'Instant Automat Glass màu Elbrus",
        "price": 5300000, "quantitys": 200,
        "description": "Sử dụng giấy in ảnh Fujifilm instax mini. In ảnh kích thước thẻ tín dụng. Ống kính tương đương 38mm, f/4.5 & f/22. Bộ gắn ống kính cận cảnh và splitzer. Nắp ống kính điều khiển từ xa. Đi kèm bộ gel màu. Sử dụng 2 pin CR2 ",
        "category": "lamography",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-chup-in-lien-lomography-lomoinstant-automat-glass-mau-elbrus.jpg"
      },
      {
        "id": 12,
        "title": "Máy Ảnh Chụp In Liền Lomography Lomo'Instant Màu Đen + 3 Lenses",
        "price": 2420000, "quantitys": 50,
        "description": "Sử dụng giấy in ảnh Fujifilm instax. In ảnh kích thước thẻ tín dụng. Ống kính tiêu chuẩn 27mm f/8. Kính ngắm quang học trực tiếp. Các chế độ phơi sáng Automatic, Long, Multiple Exposure. Tích hợp đèn flash, 3 chế độ. Đi kèm bộ gel màu trong bộ lọc đèn flash. Ngàm gắn tripod và dây cáp thao tác",
        "category": "lamography",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-chup-in-lien-lomography-lomoinstant-mau-den-3-lenses.jpg"
      },
      {
        "id": 13,
        "title": "Máy Ảnh Chống Nước Ricoh WG-70",
        "price": 6700000, "quantitys": 30,
        "description": "Cảm biến ảnh 16MP 1/2.3″ BSI CMOS. Ống kính tiêu cự tương đương 28-140mm trên Fullframe. Khả năng zoom quang học 5X, zoom kỹ thuật số 7.5X. Khe thẻ nhớ SD/SDHC/SDXC. Cổng kết nối: HDMI D (Micro), USB 2.0 Micro-B. Pin sạc D-LI92 Lithium-Ion, 3.7 VDC, 770 mAh có khả năng chụp được 300 tấm và Playback trong 260 phút.",
        "category": "ricoh",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-chong-nuoc-ricoh-wg-70.jpg"
      },
      {
        "id": 14,
        "title": "Máy Chụp Ảnh Ricoh Theta SC Pinky",
        "price": 6490000, "quantitys": 5,
        "description": "Quay video Full HD 1080p/30 fps. Live Streaming bằng USB hoặc HDMI. Auto, Shutter Speed & ISO Priority Modes. ISO 1600 & Manual Exposure lên đến 1 Min.. Kết nối Wi-Fi để Live View và điều khiển",
        "category": "ricoh",
        "image": "https://binhminhdigital.com/StoreData/images/Product/ricoh-theta-sc-quay-360-do-hong.jpg"
      },
      {
        "id": 15,
        "title": "Máy Ảnh Nikon Z7 + Kit NIKKOR Z 24-70mm f/4 S + Ngàm chuyển Nikon FTZ",
        "price": 82000000, "quantitys": 80,
        "description": "Phụ kiện đi kèm:  Ngàm FTZ, Pin, bộ sạc pin, bộ sạc nguồn AC EH-7P, cáp USB UC-E24, dây đeo, nắp body BF-N1, mắt kính ngắm cao su, cáp HDMI / USB, thẻ bảo hành, hướng dẫn sử dụng",
        "category": "nikon",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
      },
      {
        "id": 16,
        "title": "Máy Ảnh Nikon Coolpix A1000",
        "price": 80000000, "quantitys": 120,
        "description": "",
        "category": "nikon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/nikon-coolpix-a1000(1).jpg"
      },
      {
        "id": 17,
        "title": "Máy Ảnh Nikon D750",
        "price": 120000000, "quantitys": 10,
        "description": "",
        "category": "nikon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/nikon-d750-kit-afs-24120-f4-g-ed-vr-hang-nhap-khau.jpg"
      },
      {
        "id": 18,
        "title": "Máy Ảnh Nikon Coolpix W300",
        "price": 9000000, "quantitys": 100,
        "description": "Tốc độ màn trập: 1/4.000 giây. Chụp liên tiếp: tối đa 7 fps. Quay phim: 4K/30p, 4K/25p, Full HD. Đèn trợ sáng: flash xenon + LED. Kết nối: Wi-Fi, Bluetooth, GPS. Lưu trữ: 473 MB + thẻ nhớ SD. Kích thước: 112 x 66 x 29 mm. Khối lượng: 231 g", "category": "nikon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/nikon-coolpix-w300-xanh-linh.jpg"
      },
      {
        "id": 19,
        "title": "Máy Ảnh Nikon COOLPIX W150",
        "price": 8000000, "quantitys": 50,
        "description": "Màn hình LCD không cảm ứng, độ phân giải 230,000 điểm ảnh",
        "category": "nikon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-nikon-coolpix-w150-blue.jpg"
      },
      {
        "id": 20,
        "title": "Nikon COOLPIX W150 Flowers",
        "price": 4800000, "quantitys": 100,
        "description": "Màn hình LCD không cảm ứng, độ phân giải 230,000 điểm ảnh",
        "category": "nikon",
        "image": "https://binhminhdigital.com/StoreData/images/Product/may-anh-nikon-coolpix-w150-flowers.jpg"
      }

    ];
  // id: string = '';
  title: string = '';
  price: number = 0;
  description: string = '';
  image: string = '';
  category: string = '';
  quantitys: number = 0;
  index: number = 0;

  isUpdate: boolean = false;
  isShowForm: boolean = false;
  isAddBook = true;

  constructor() { }
  ngOnInit(): void { }

  addBook() {
    if (this.isAddBook) {
      this.danhsach_sanpham.unshift({
        id: this.danhsach_sanpham.length + 1,
        title: this.title,
        price: this.price,
        description: this.description,
        quantitys: this.quantitys,
      });
    }
    else {
      this.danhsach_sanpham[this.index].title = this.title;
      this.danhsach_sanpham[this.index].price = this.price;
      this.danhsach_sanpham[this.index].description = this.description;
      this.danhsach_sanpham[this.index].quantitys = this.quantitys;
      this.danhsach_sanpham[this.index].category = this.category;
      this.danhsach_sanpham[this.index].image = this.image;
    }
    this.title='';
    this.image='';
    this.category='';
    this.description = '';
    this.isShowForm = false;
  }

  removeBook(id: number) {
    const index = this.danhsach_sanpham.findIndex(b => b.id === id);
    this.danhsach_sanpham.splice(index, 1);
  }
  updateBook(id: string) {
    this.index = this.danhsach_sanpham.findIndex(b => b.id === id);
    this.title = this.danhsach_sanpham[this.index].title;
    this.price = this.danhsach_sanpham[this.index].price;
    this.description = this.danhsach_sanpham[this.index].description;
    this.quantitys = this.danhsach_sanpham[this.index].quantitys;
    this.category = this.danhsach_sanpham[this.index].category;
    this.image = this.danhsach_sanpham[this.index].image;

    this.isAddBook = false;
    this.isShowForm = true;
    this.isUpdate = true;
  }

}
