import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiemke',
  templateUrl: './kiemke.component.html',
  styleUrls: ['./kiemke.component.scss']
})
export class KiemkeComponent implements OnInit {

  danhsach_sp: any[] =
    [
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

    ];
  
    danhsach_xuathang: any[] = [
    { Mapx:'K001', Sanpham: 'Canon Powershot G7 X Mark III', Ngaytao: '03/12/2021', Tonkho: 200, Slx: 55, kq1: 145  }
  ];

    Mapx: string = '';
    Slx: number = 0;
    Ngaytao: string = '';
    Sanpham: string = '';
    index: number = 0;
    Tonkho:number = 0; //sl nhập
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
          kq1: this.Tonkho - this.Slx,

      });
    }
    else {
      this.danhsach_xuathang[this.index].Mapx = this.Mapx;
      this.danhsach_xuathang[this.index].Slx = this.Slx;
      this.danhsach_xuathang[this.index].Tonkho = this.Tonkho;
      this.danhsach_xuathang[this.index].Ngaytao = this.Ngaytao;
      this.danhsach_xuathang[this.index].Sanpham = this.Sanpham;
    }
    this.Mapx = '';
    this.Ngaytao = '';
    this.Sanpham = '';
    this.isShowForm = false;
  }
  
}
