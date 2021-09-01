import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  danhsach_nhanvien: any[] = [
    {
      Map: 'PN001', Soluong: 20, Ngaytao: '04/02/2021', Sanpham: 'CAmera abc', Giaban: 150000
    }
    // { Manv: 2, Tennv: 'Hồng Thất Công', Phong: 'Hành Chính', Luong: 5000000,TNg:"", Gioitinh: false },
    // {
    //   Manv: 3, Tennv: 'Bất Phục Hồi', Phong: 'Sản xuất', Luong: 4500000, TNg:"",Gioitinh: false
    // },
    // {
    //   Manv: 4, Tennv: 'Nguyễn Thị Hỗi Sức', Phong: 'Phạm Huy Hoàng', Luong: 5500000, TNg:"",Gioitinh: true
    // },
    // {
    //   Manv: 5, Tennv: 'Trần Văn Dốt', Phong: 'Kỹ Thuật', Luong: 4500000,  TNg:"",Gioitinh: false
    // },
    // {
    //   Manv: 6, Tennv: 'Trương Thanh Đần', Phong: 'Sản xuất', Luong: 4000000,  TNg:"",Gioitinh: false
    // },
    // {
    //   Manv: 7, Tennv: 'Lê Thị Học Lại', Phong: 'Kế Toán', Luong: 4000000,  TNg:"",Gioitinh: true
    // },
  ];
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
          // Manv: this.danhsach_nhanvien.length + 1, 
          // Tennv: this.Tennv, 
          // Phong: this.Phong,
          // Luong: this.Luong, 
          // Gioitinh: this.Gioitinh,
          // TNg: this.TNg,
          // kq: this.Luong - this.TNg
      });
    }
    else {
      this.danhsach_nhanvien[this.index].Map = this.Map;
      this.danhsach_nhanvien[this.index].Soluong = this.Soluong;
      this.danhsach_nhanvien[this.index].Ngaytao = this.Ngaytao;
      this.danhsach_nhanvien[this.index].Sanpham = this.Sanpham;
      this.danhsach_nhanvien[this.index].Giaban = this.Giaban;
      // this.danhsach_nhanvien[this.index].Tennv = this.Tennv;
      // this.danhsach_nhanvien[this.index].Phong = this.Phong;
      // this.danhsach_nhanvien[this.index].Luong = this.Luong;
      // this.danhsach_nhanvien[this.index].Gioitinh = this.Gioitinh;
      // this.danhsach_nhanvien[this.index].TNg = this.TNg;
    }
    this.Map = '';
    this.Ngaytao = '';
    this.Sanpham = '';
    // this.Tennv = '';
    // this.Phong = '';
    // this.Luong = 0;
    // this.TNg = 0;
    this.isShowForm = false;
  }
 
  removeBook(Map: number) {
    const index = this.danhsach_nhanvien.findIndex(b => b.Map === Map);
    this.danhsach_nhanvien.splice(index, 1);
  } 
  updateBook(Map: string) {
    
    this.Map = this.danhsach_nhanvien[this.index].Map;
    this.Soluong = this.danhsach_nhanvien[this.index].Soluong;
    this.Ngaytao = this.danhsach_nhanvien[this.index].Ngaytao;
    this.Sanpham = this.danhsach_nhanvien[this.index].Sanpham;
    this.Giaban = this.danhsach_nhanvien[this.index].Giaban;
    this.kq = this.danhsach_nhanvien[this.index].kq;
    // this.Gioitinh = this.danhsach_nhanvien[this.index].Gioitinh;
    // this.TNg = this.danhsach_nhanvien[this.index].TNg;
    // this.kq = this.danhsach_nhanvien[this.index].Luong - this.danhsach_nhanvien[this.index].TNg;
    this.isAddBook = false;
    this.isShowForm = true;
    this.isUpdate = true;
  }

}
