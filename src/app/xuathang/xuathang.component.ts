import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xuathang',
  templateUrl: './xuathang.component.html',
  styleUrls: ['./xuathang.component.scss']
})
export class XuathangComponent implements OnInit {
  danhsach_xuathang: any[] = [
    {
      Mapx: 'PX001', Slx: 20, Ngaytao: '04/02/2021', Sanpham: 'CAmera abc', Giaban: 150000, Tonkho: 150
    }
    
  ];
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
