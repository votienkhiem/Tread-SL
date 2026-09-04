import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

   data = [
    {
      // 2205000325394,TR710029B-01,B2301,2026-09-03 07:26:12
      maCode: '205000325394',
      maTD: 'TR710029B-01',
      soLuong: 38,
      soXe: 'DT218',
      may: 'B2301',
      note: 'MR',
      ngay: '2026-09-03 07:26:12'
    },
    {
      maCode: '205000325333',
      maTD: 'TR700011B-01',
      soLuong: 10,
      soXe: 'DT111',
      may: 'B2301',
      note: 'TL nặng',
      ngay: '2026-09-03 07:26:12'
    }
  ];

  onScan(){
    console.log('Bấm nút scan');
  }
}
