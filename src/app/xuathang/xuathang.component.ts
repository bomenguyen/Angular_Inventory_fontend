import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xuathang',
  templateUrl: './xuathang.component.html',
  styleUrls: ['./xuathang.component.scss']
})
export class XuathangComponent implements OnInit {
  danhsach_xuathang: any[] = [
    {
      Mapx: 'PX001', Slx: 20, Ngaytao: '04/02/2021', Sanpham: 'CAmera abc', Giaban: 150000, Tonkho: 150, kq: 	3000000
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

    Mapx: string = '';
    Slx: number = 0;
    Ngaytao: string = '';
    Sanpham: string = '';
    Giaban: number=0;
    index: number = 0;
    Tonkho:number = 0;
    kq: number =0;
    kq1: number =0;

    isUpdate: boolean = false;
    isShowForm: boolean = false;
    isAddBook = true;

  constructor() { }
  ngOnInit(): void { }

  addBook() {
    console.log(this.addBook);
    if (this.isAddBook) {
      this.danhsach_xuathang.unshift({
          Mapx: this.Mapx,
          Slx: this.Slx,
          Tonkho: this.Tonkho,
          Ngaytao: this.Ngaytao,
          Sanpham: this.Sanpham,
          Giaban: this.Giaban,
          // kq1: this.Tonkho - this.Slx,
          kq: this.Slx * this.Giaban,
      });
    }
    else {
      this.danhsach_xuathang[this.index].Mapx = this.Mapx;
      this.danhsach_xuathang[this.index].Slx = this.Slx;
      this.danhsach_xuathang[this.index].Tonkho = this.Tonkho;
      this.danhsach_xuathang[this.index].Ngaytao = this.Ngaytao;
      this.danhsach_xuathang[this.index].Sanpham = this.Sanpham;
      this.danhsach_xuathang[this.index].Giaban = this.Giaban;
    }
    this.Mapx = '';
    this.Ngaytao = '';
    this.Sanpham = '';
    this.isShowForm = false;
  }
 
  removeBook(Mapx: string) {
    const index = this.danhsach_xuathang.findIndex(b => b.Mapx === Mapx);
    this.danhsach_xuathang.splice(index, 1);
  } 
  updateBook() {
    this.Mapx = this.danhsach_xuathang[this.index].Mapx;
    this.Slx = this.danhsach_xuathang[this.index].Slx;
    this.danhsach_xuathang[this.index].Tonkho = this.Tonkho;
    this.Ngaytao = this.danhsach_xuathang[this.index].Ngaytao;
    this.Sanpham = this.danhsach_xuathang[this.index].Sanpham;
    this.Giaban = this.danhsach_xuathang[this.index].Giaban;

    this.kq = this.danhsach_xuathang[this.index].Slx * this.danhsach_xuathang[this.index].Giaban ;
    console.log(this.kq)

    this.isAddBook = false;
    this.isShowForm = true;
    this.isUpdate = true;
  }

}
