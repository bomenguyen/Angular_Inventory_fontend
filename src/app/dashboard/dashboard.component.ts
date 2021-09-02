import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  danhsach_nhanvien: any[] = [
    {
      Map: 'PN001', Soluong: 20, Ngaytao: '04/02/2021', Sanpham: 'CAmera abc', Giaban: 150000, kq: 	3000000
    }
  ];
  danhsach_sp: any[] = [
    {
      "id": 1,
      "Sanpham": "Canon Powershot G7 X Mark III",
      "Giaban": 18000000, "Tonkho": 50,
      "Slx": 20
    },
    {
      "id": 2,
      "Sanpham": "Canon Powershot G7 X Mark/BẠC",
      "Giaban": 0, "Tonkho": 100,"Slx": 20
    },
    {
      "id": 3,
      "Sanpham": "Canon EOS 5D Mark IV",
      "Giaban": 56000000, "Tonkho": 250,"Slx": 20
     
    },
    {
      "id": 4,
      "Sanpham": "Canon EOS 6D Mark II kit EF 24-105MM F3.5-5.6 IS STM",
      "Giaban": 42190000, "Tonkho": 20,"Slx": 9
    },
    {
      "id": 5,
      "Sanpham": "Ống Kính Canon EF 35mm F1.4L II USM",
      "Giaban": 45500000, "Tonkho": 5,"Slx": 0
    },
    {
      "id": 6,
      "Sanpham": "Fujifilm X-T4 KIT XF18-55MM",
      "Giaban": 45900000, "Tonkho": 10,"Slx": 20
      
    },
    {
      "id": 7,
      "Sanpham": "Máy Ảnh Fujifilm GFX 100",
      "Giaban": 224990000, "Tonkho": 200,"Slx": 55
    },
    {
      "id": 8,
      "Sanpham": "Fujifilm X-T200 Kit 15-45MM",
      "Giaban": 18900000, "Tonkho": 60,"Slx": 20
    },
    {
      "id": 9,
      "Sanpham": "Máy Ảnh Chụp In Liền Lomography Diana Instant Square Deluxe Kit Màu AdrianC",
      "Giaban": 5900000, "Tonkho": 150,"Slx": 20
    },
    {
      "id": 10,
      "Sanpham": "Máy ảnh phim 35mm Lomography Lomo LC-A+",
      "Giaban": 7000000, "Tonkho": 80,"Slx": 46
    }
  ]
  
    Map: string = '';
    Soluong: number = 0;
    Ngaytao: string = '';
    Sanpham: string = '';
    Giaban: number=0;
    index: number = 0;
    kq: number =0;

    isUpdate: boolean = false;
    isShowForm: boolean = false;
    isAddBook = true;
    filterStatus = "All";

  constructor() { }
  ngOnInit(): void { }

  addBook() {
    if (this.isAddBook) {
      this.danhsach_nhanvien.unshift({
          Map: this.Map,
          Soluong: this.Soluong,
          Ngaytao: this.Ngaytao,
          Sanpham: this.Sanpham,
          Giaban: this.Giaban,
          kq: this.Soluong * this.Giaban,
         
      });
    }
    else {
      this.danhsach_nhanvien[this.index].Map = this.Map;
      this.danhsach_nhanvien[this.index].Soluong = this.Soluong;
      this.danhsach_nhanvien[this.index].Ngaytao = this.Ngaytao;
      this.danhsach_nhanvien[this.index].Sanpham = this.Sanpham;
      this.danhsach_nhanvien[this.index].Giaban = this.Giaban;
     
    }
    this.Map = '';
    this.Ngaytao = '';
    this.Sanpham = '';

    this.isShowForm = false;
  }
 
  removeBook(Map: string) {
    const index = this.danhsach_nhanvien.findIndex(b => b.Map === Map);
    this.danhsach_nhanvien.splice(index, 1);
  } 
  updateBook() {
    this.Map = this.danhsach_nhanvien[this.index].Map;
    this.Soluong = this.danhsach_nhanvien[this.index].Soluong;
    this.Ngaytao = this.danhsach_nhanvien[this.index].Ngaytao;
    this.Sanpham = this.danhsach_nhanvien[this.index].Sanpham;
    this.Giaban = this.danhsach_nhanvien[this.index].Giaban;
   
    this.isAddBook = false;
    this.isShowForm = true;
    this.isUpdate = true;
  }

}
